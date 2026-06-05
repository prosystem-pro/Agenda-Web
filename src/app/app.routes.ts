import { Routes } from '@angular/router';
import { AutorizacionRuta } from './Autorizacion/AutorizacionRuta';
import { LoginGuard } from './Servicios/loginGuard';
import { SpinnerGlobalComponent } from './Componentes/spinner-global/spinner-global.component';

//TRANSPORTES CANU
import { ViajesComponent } from './Paginas/TransportesCanu/viajes/viajes.component';
import { NabarSidebarComponent } from './Paginas/TransportesCanu/nabar-sidebar/nabar-sidebar.component';
import { InicioTCComponent } from './Paginas/TransportesCanu/inicio-tc/inicio-tc.component';
import { MantenimientoComponent } from './Paginas/TransportesCanu/mantenimiento/mantenimiento.component';
import { LoginTCComponent } from './Paginas/TransportesCanu/login-tc/login-tc.component';
import { ReportesComponent } from './Paginas/TransportesCanu/reportes/reportes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/logintc', pathMatch: 'full' },

  //Rutas publicas
  { path: 'spinner-global', component: SpinnerGlobalComponent },

  //Rutas protegidas

  //Transportes Canu
  { path: 'navbarsidebar', component: NabarSidebarComponent, canActivate: [AutorizacionRuta] },
  { path: 'viajes', component: ViajesComponent, canActivate: [AutorizacionRuta] },
  { path: 'iniciotc', component: InicioTCComponent, canActivate: [AutorizacionRuta] },
  { path: 'mantenimiento', component: MantenimientoComponent, canActivate: [AutorizacionRuta] },
  { path: 'reportes', component: ReportesComponent, canActivate: [AutorizacionRuta] },
  { path: 'logintc', component: LoginTCComponent },

  { path: '**', redirectTo: 'logintc' },
];
