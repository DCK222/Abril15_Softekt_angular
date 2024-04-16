import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface ColorOption {
  id: number;
  
  selected: boolean;
  hola: string;
}
 interface tipoProcesador{
id: number;
nombre : string;
}
interface fuenteAlimentacion{
  id : number;
  nombre: string;
  selected: boolean;
}
interface TipofuenteAlimentacion{
  id : number;
  tipo: number;
}

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css'] 
})
export class Ejercicio2Component {

  RAMopciones: ColorOption[] = [
    { id: 1,hola:"RAM-32" ,  selected: false },
    { id: 2, hola:"RAM-16" ,  selected: false },
    { id: 3, hola:"RAM-8" ,  selected: false }
  ];

 
  procesadores : tipoProcesador[] =[
    {id : 1,nombre : "Corei9"},
    {id : 2, nombre : "Core17"},
    {id : 3,nombre : "Corei5"}

  ];
  fuente : fuenteAlimentacion[] =[
    {id : 1,nombre : "HDD", selected: false},
    {id : 2, nombre : "SSD", selected: false},
   

  ];
  fuenteTipo : TipofuenteAlimentacion[] =[
    {id : 1,tipo : 600},
    {id : 2, tipo : 400},
    {id : 3, tipo : 200},
    {id : 4, tipo : 100},
   

  ];

  
  checkboxactivo = false;
proceeessadorsele: any;


  marcado(): void {
    console.log(`El checkbox está ${this.checkboxactivo ? 'marcado' : 'no marcado'}.`);
  }

  procesadorSeleccionado: number = this.procesadores[0].id;
  fuentesalimentacionsele:number = this.fuente[0].id;
  onSelectChange() {
    console.log(`Procesador seleccionado: ${this.procesadorSeleccionado}`);
  }


  ramSeleccionada: string[] = [];

  // const seleccionadosDiscosdirps = this.fuente
  // .filter(g => g.fuente)
  // .map(g => g.nombre)
  // .join(', ');

  MostrarInfo = false;
  opcioneselec(): void {
   
    const ramNombresSeleccionados = this.RAMopciones.filter(RAM => this.ramSeleccionada[RAM.id]).map(RAM => RAM.hola);
    alert(ramNombresSeleccionados + 
      "\nTipo de Procesador : " + this.procesadorSeleccionado
      + "\n Tarjeta Grafica : " +  this.checkboxactivo + 
      "\n Fuente de alimentacion : " + this.fuentesalimentacionsele
    );
  }
  


  
  

}