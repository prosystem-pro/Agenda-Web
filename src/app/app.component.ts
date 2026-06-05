import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { Entorno } from './Entornos/Entorno';
import { PermisoServicio } from './Autorizacion/AutorizacionPermiso';
import { LoginServicio } from './Servicios/LoginServicio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'CarritoWeb-Web';
  
}