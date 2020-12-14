import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.page.html',
  styleUrls: ['./habitaciones.page.scss'],
})
export class HabitacionesPage implements OnInit {

  fechaActual:Date;
  prueba1:Date;
  prueba2:Date;
  prueba1a:Date;
  prueba2a:Date;

  slideOpts = {
    initialSlide: 0,
    speed: 300
  };

  constructor() { }

  ngOnInit() { 
    this.fechaCorrecta();
  }

  fechaCorrecta(){ 
    this.fechaActual = new Date();
  }
   asignarFechaLabel(){
     this.prueba1a = this.prueba1;
     this.prueba2a = this.prueba2;
   }

}
