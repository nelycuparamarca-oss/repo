import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent {
  title = 'Independencia América Latina';
  
  menuItems = [
    { path: '', label: 'Inicio' },
    { path: 'paises', label: 'Países' },
    { path: 'about', label: 'Acerca de' }
  ];

  anchorLinks = [
    { anchor: 'heroes', label: 'Héroes' },
    { anchor: 'historia', label: 'Historia' },
    { anchor: 'causas', label: 'Causas' },
    { anchor: 'consecuencias', label: 'Consecuencias' }
  ];
}