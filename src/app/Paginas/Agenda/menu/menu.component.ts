import { Component } from '@angular/core';
import { NabarSidebarComponent } from "../nabar-sidebar/nabar-sidebar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [NabarSidebarComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router) { }

  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }
}
