import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio1Component } from "./ejercicio1/ejercicio1.component";
import { Ejercicio2Component } from "./ejercicio2/ejercicio2.component";
import { Ejercicio3Component } from "./ejercicio3/ejercicio3.component";
import { FormsModule } from '@angular/forms';
import { Ejercicio4Component } from "./ejercicio4/ejercicio4.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [FormsModule, RouterOutlet, Ejercicio1Component, Ejercicio2Component, Ejercicio3Component, Ejercicio4Component]
})
export class AppComponent {
  title = 'abril15_angular_Softek';
}
