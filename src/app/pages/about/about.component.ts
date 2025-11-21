import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: false
})
export class AboutComponent {
  proyectoInfo = {
    titulo: 'Sobre Este Proyecto',
    descripcion: 'Sitio web educativo desarrollado para comprender y difundir la historia de la independencia de América Latina, un proceso fundamental que cambió el destino de todo un continente.',
    objetivo: 'Proporcionar información accesible, organizada y visualmente atractiva sobre este importante periodo histórico, facilitando el aprendizaje y la comprensión de los eventos y personajes clave.',
    caracteristicas: [
      'Información histórica precisa y organizada',
      'Diseño responsive y accesible',
      'Navegación intuitiva con enlaces internos',
      'Contenido visual con imágenes representativas',
      'Enfoque educativo para todos los niveles'
    ]
  };

  tecnologias = [
    { nombre: 'Angular', descripcion: 'Framework para aplicaciones web' },
    { nombre: 'TypeScript', descripcion: 'Lenguaje de programación' },
    { nombre: 'SCSS', descripcion: 'Preprocesador CSS' },
    { nombre: 'HTML5', descripcion: 'Lenguaje de marcado' },
    { nombre: 'Responsive Design', descripcion: 'Diseño adaptable' }
  ];

  estudianteInfo = {
    nombre: 'Nely Cupara Marca',
    curso: 'Diseño y Programación Grafica',
    institucion: 'Ingenieria de Sistemas - UATF',
    proposito: 'Aprender y presentar un proyecto educativo sobre la independencia latinoamericana'
  };
}