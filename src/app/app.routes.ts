import { Routes } from '@angular/router';
import { AutorizacionRuta } from './Autorizacion/AutorizacionRuta';
import { LoginGuard } from './Servicios/loginGuard';
import { SpinnerGlobalComponent } from './Componentes/spinner-global/spinner-global.component';

//TRANSPORTES CANU
import { ViajesComponent } from './Paginas/Agenda/viajes/viajes.component';
import { NabarSidebarComponent } from './Paginas/Agenda/nabar-sidebar/nabar-sidebar.component';
import { MenuComponent } from './Paginas/Agenda/menu/menu.component';
import { MantenimientoComponent } from './Paginas/Agenda/mantenimiento/mantenimiento.component';
import { LoginComponent } from './Paginas/Agenda/login/login.component';
import { ReportesComponent } from './Paginas/Agenda/reportes/reportes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/logintc', pathMatch: 'full' },

  //Rutas publicas
  { path: 'spinner-global', component: SpinnerGlobalComponent },

  //Rutas protegidas

  //Transportes Canu
  { path: 'navbarsidebar', component: NabarSidebarComponent, canActivate: [AutorizacionRuta] },
  { path: 'viajes', component: ViajesComponent, canActivate: [AutorizacionRuta] },
  { path: 'iniciotc', component: MenuComponent, canActivate: [AutorizacionRuta] },
  { path: 'mantenimiento', component: MantenimientoComponent, canActivate: [AutorizacionRuta] },
  { path: 'reportes', component: ReportesComponent, canActivate: [AutorizacionRuta] },
  { path: 'logintc', component: LoginComponent },

  { path: '**', redirectTo: 'logintc' },
];
