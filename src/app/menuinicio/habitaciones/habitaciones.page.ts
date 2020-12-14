import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Habitacion } from 'src/app/models/habitacion';
import { HabitacionServiceService } from 'src/app/services/habitacion-service.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.page.html',
  styleUrls: ['./habitaciones.page.scss'],
})
export class HabitacionesPage implements OnInit {

  fechaActual:Date;
  habitaciones:Habitacion[];
  prueba1:Date;
  prueba2:Date;
  prueba1a:Date;
  prueba2a:Date;

  tipo_:string;
  precio_:number;
  descripcion_:string;
  aire_:string;
  ventilador_:string;

  slideOpts = {
    initialSlide: 0,
    speed: 300
  };

  constructor(private habitacionService:HabitacionServiceService) { }

  ngOnInit() {
    this.traerHabitaciones(); 
    this.fechaCorrecta();
  }

  fechaCorrecta(){ 
    this.fechaActual = new Date();
  }
   asignarFechaLabel(){
     this.prueba1a = this.prueba1;
     this.prueba2a = this.prueba2;
   }

   traerHabitaciones(){
    this.habitacionService.get().subscribe(result => {
      this.habitaciones = result;
    });
  }

}
