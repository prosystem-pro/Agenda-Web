import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginServicio } from './LoginServicio';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const AutorizacionInterceptor: HttpInterceptorFn = (Solicitud, Siguiente) => {
  const Servicio = inject(LoginServicio);
  const router = inject(Router);

  const Token = Servicio.ObtenerToken();

  // Agregar token si existe
  if (Token) {
    Solicitud = Solicitud.clone({
      setHeaders: {
        Authorization: `Bearer ${Token}`
      }
    });
  }

  return Siguiente(Solicitud).pipe(
    catchError(Error => {
      if (Error.status === 401) {
        console.warn('Token expirado o no válido');
        Servicio.EliminarToken();

        // Rutas especiales que deben ir a login
        const rutasLogin = ['/viajes', '/mantenimiento','/menu','/nabar-sidebar'];

        // Redirección condicional
        if (rutasLogin.some(ruta => Solicitud.url.includes(ruta))) {
          router.navigate(['/login']);
        } else {
          router.navigate(['/login']);
        }
      }

      return throwError(() => Error);
    })
  );
};
