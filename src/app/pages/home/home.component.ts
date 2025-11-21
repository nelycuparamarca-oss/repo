import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent {
  heroTitle = 'La Independencia de América Latina';
  heroDescription = 'Un viaje a través de la historia que cambió el destino de todo un continente ';
  
  heroes = [
    {
      nombre: 'Simón Bolívar',
      pais: 'Venezuela',
      logro: 'El Libertador de 5 naciones',
  imagen: 'assets/images/simonbolivar.jpg',
      descripcion: '  En america aparecieron lideres que creian que deviamos  ser independientes entre ellos sobre salieron SIMON BOLIVAR Y JOSE DE SAN MARTIN ANTONIO JOSE DE SUCRE  MIGUEL IDALGO entre otros  las colonias comenaron a organizar movimiento revolucionario  primeros pequeños y luego grandes ejercitos  hubo batallas derrotas y trinfuos  en venezuela ,nueva granada ,  ecuador  PERU Y BOLIVIA las guerras fueron muy intensas y duraron años uno de los momentos mas importantes fue cuando SIMON BOLIVAR ,desde el congreso de angoustora en 1819organizo un ejercito fuerte que logro liberar gran oarte del norte de sud america con ayuda de sucre y otros patriotas fueron expulsando poco a poco alos españoles  tambuien se formo un pais gigante llamando GRAN COLOMBIA,que reunio a varios territorios liberados aunque despues se separo por conflictos internos COMO TERMINO ? La indepencia se consolido cuando los ejersitos lograron vecer difinitivamente alos españoles en battallas decesivas como  PICHINCHA ,JUNIN,AYACUCHO. desoues de esa victorias ya no quedava poder colonial es sud america haci nacieron  nuevos paises : VENEZUELA ,COLOMBIA.ECUADOR,PERU ,BOLIVIA ) y cada nacion comenzo a crear su propio gobierno, leyes y futuros  ',
    },
    {
      nombre: 'José de San Martín',
      pais: 'Argentina', 
      logro: 'Libertador del Sur',
  imagen: 'assets/images/sanmartin.jpg',
      descripcion: 'San Martin  formo un ejercito fuerte y bien entrenado en argentin con el objetivo de liberar chile y luego peru .libero a CHILE despues de crusar los andez San Martin derroto alos españoles en las batallas de CHACABUCO Y MAIPU,asegurando la independencia de chile .libero a PERU  luego organizo una expedicion maritima y llego a peru  En 18821 entro a lima y proclamo la independencia del peru SE REUNIO CON SIMON BOLIVAR ambos se reunieron en guayaquil en 1822 para decidir quien continuaria la lucha en peru  SAN MARTIN  renuncio al liderazgo para evitar conflictos y dejo que bolivar terminara la campaña  SAN MARTIN LIBERO  A  ARGENTINA  lucho para asegurar su independencia y borganizar su defensa ,CHILE  Libero chile despues de ganar las batallas de chababuco y maipu,PERU Proclamo la independencia del peru y expulso gran parte del poder español. '
    }
  ];

  causas = [
    {
      titulo: 'Influencia de la Ilustración',
      descripcion: 'Las ideas de libertad, igualdad y fraternidad llegaron a América Y fueron  fundamentalea para la independencia COMO LLEGARON? atarves  de librosy periodicos  que entraban de contrabando por comerciantes  y viajeros  europeos  mediante estudiantes criollos  que habian estudiado  en europa  simon bolivar decia somos un pequeño genero humano ...no somos indios  ni europeos  sino una  espesie media  mostrando esa nueva identidad americana',
      icono: ''
    },
    {
      titulo: 'Revoluciones Inspiradoras',
      descripcion: 'La Revolución Francesa y la Independencia de Estados Unidos Los lideres como Bolivar y san Martin usaron estas ideas para justificar la lucha Desian que no querian seguir siendo una COLONIA sometida si no una nacion libre e independiente tal como habia proclamado el pueblo franses ',
      icono: ''
    }
  ];

  consecuencias = [
    'cambio de gobierno  pero no la desigualdad . los criollos  remplazaron alos españoles en el poder, pero la mayoria  de la poblacion  siguio siendo pobre y sin derechos reales se logro la ndependencia politica pero no la independencia economica ni la justicia',
    'Nacimiento de nuevas naciones independientes',
    'Fin del sistema colonial español',
    'Inestabilidad política en los nuevos países'
  ];
}