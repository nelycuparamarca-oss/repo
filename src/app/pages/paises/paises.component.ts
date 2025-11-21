import { Component } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss'],
  standalone: false
})
export class PaisesComponent {
  paises = [
    {
      nombre: 'México',
      fecha: '16 de Septiembre, 1810',
      lider: 'Miguel Hidalgo',
      imagen: 'https://via.placeholder.com/400x250/006847/FFFFFF?text=México+Independencia',
      bandera: '🇲🇽',
      descripcion: 'Iniciada con el Grito de Dolores por Miguel Hidalgo, culminó en 1821 con el Plan de Iguala'
    },
    {
      nombre: 'Argentina',
      fecha: '9 de Julio, 1816',
      lider: 'José de San Martín',
      imagen: 'https://via.placeholder.com/400x250/75AADB/FFFFFF?text=Argentina+Independencia',
      bandera: '🇦🇷',
      descripcion: 'Declarada en el Congreso de Tucumán tras las campañas libertadoras de San Martín'
    },
    {
      nombre: 'Colombia',
      fecha: '20 de Julio, 1810',
      lider: 'Simón Bolívar',
      imagen: 'https://via.placeholder.com/400x250/FCD116/000000?text=Colombia+Independencia',
      bandera: '🇨🇴',
      descripcion: 'Proceso que incluyó la Gran Colombia y culminó con la Batalla de Boyacá en 1819'
    },
    {
      nombre: 'Perú',
      fecha: '28 de Julio, 1821',
      lider: 'José de San Martín',
      imagen: 'https://via.placeholder.com/400x250/D91023/FFFFFF?text=Perú+Independencia',
      bandera: '🇵🇪',
      descripcion: 'Proclamada por San Martín en Lima, consolidada por Bolívar en la Batalla de Ayacucho'
    },
    {
      nombre: 'Chile',
      fecha: '12 de Febrero, 1818',
      lider: 'Bernardo OHiggins',
      imagen: 'https://via.placeholder.com/400x250/0039A6/FFFFFF?text=Chile+Independencia',
      bandera: '🇨🇱', 
      descripcion: 'Lograda tras la victoria en la Batalla de Maipú dirigida por San Martín y OHiggins'
    },
    {
      nombre: 'Brasil',
      fecha: '7 de Septiembre, 1822',
      lider: 'Pedro I',
      imagen: 'https://via.placeholder.com/400x250/009C3B/FFFFFF?text=Brasil+Independencia',
      bandera: '🇧🇷',
      descripcion: 'Proceso pacífico bajo el liderazgo del hijo del rey de Portugal, conocido como el Grito de Ipiranga'
    },
    {
      nombre: 'Venezuela',
      fecha: '5 de Julio, 1811',
      lider: 'Simón Bolívar',
      imagen: 'https://via.placeholder.com/400x250/CF142B/FFFFFF?text=Venezuela+Independencia',
      bandera: '🇻🇪',
      descripcion: 'Primera declaración de independencia en Sudamérica, liderada por el Libertador Simón Bolívar'
    },
    {
      nombre: 'Ecuador',
      fecha: '24 de Mayo, 1822',
      lider: 'Antonio José de Sucre',
      imagen: 'https://via.placeholder.com/400x250/FCD116/000000?text=Ecuador+Independencia',
      bandera: '🇪🇨',
      descripcion: 'Consolidada con la Batalla de Pichincha bajo el mando del Mariscal Sucre'
    }
  ];
}