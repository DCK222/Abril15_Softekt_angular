import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface destinos{
  id : number;
  destino: String;
}
@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {
  destinos =[
    { id: 1,nombre:"Madrid"  },
    { id: 2, nombre:"Barcelona"  },
    { id: 3, nombre:"Numancia"  }
  ];
  destinos2 =[
    { id: 1,nombre:"Albacete"  },
    { id: 2, nombre:"Granada"  },
    { id: 3, nombre:"Sabedios"  }
  ];
origen:string=" ";
seleccionarOrigen: number = this.destinos2[0].id;
origen2:string=" ";
seleccionarOrigen2: number = this.destinos2[0].id;
fechaIda: string = " ";
fechaVuelta: string = " ";
pasajerosnum: number = 0;


mostrarinfor():void{
  alert("Fecha De Salida : " + this.fechaIda + "\nFecha de Vuelta : " + this.fechaVuelta
    + "\nPasajeros : " + this.pasajerosnum + "\nLugar de origen : " + this.seleccionarOrigen
    + "\nLugar de Destino : " + this.seleccionarOrigen2
  );
 

}


}
