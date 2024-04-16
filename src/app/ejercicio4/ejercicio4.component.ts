import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css'
})
export class Ejercicio4Component {
  Genero = [
    { id: 1,nombre:"Hombre", selected: false },
    { id: 2, nombre:"Mujer", selected: false },
    { id: 3, nombre:"Otros", selected: false }
  ];
  Nacionalidad = [
    { id: 1,nombre:"Española", selected: false },
    { id: 2, nombre:"Argentina", selected: false },
    { id: 3, nombre:"Francesa", selected: false }
  ];
  Lenguajes = [
    { id: 1,nombre:"C++", selected: false },
    { id: 2, nombre:"Java", selected: false },
    { id: 3, nombre:"JS", selected: false },
    { id: 4, nombre:"Python", selected: false },
  ];
  nacionalidadesSeleciconar: number = this.Nacionalidad[0].id;
  selecciongenero: string = " ";
  seleccionlenguaje:string = " ";



  mostrarinfo():void{
    const seleccionados = this.Genero
                             .filter(g => g.selected)
                             .map(g => g.nombre)
                             .join(', ');
                             
    const seleccionadosLengu = this.Lenguajes
                             .filter(g => g.selected)
                             .map(g => g.nombre)
                             .join(', ');
    alert("Genero : " + seleccionados
      + "\n Nacionalidad : " + this.nacionalidadesSeleciconar
      + "\n Lenguajes de Programacion : " + seleccionadosLengu
     );
  }
}
