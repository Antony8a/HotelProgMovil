import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Habitacion } from 'src/app/models/habitacion';
import { HabitacionServiceService } from 'src/app/services/habitacion-service.service';

@Component({
  selector: 'app-habitacion-registro',
  templateUrl: './habitacion-registro.page.html',
  styleUrls: ['./habitacion-registro.page.scss'],
})
export class HabitacionRegistroPage implements OnInit {

  habitacion: Habitacion;
  habitaciones: Habitacion[];
  _idHabitacion:string;
  _tipo:string;
  _precio:number;
  _descripcion:string;
  _aire:string;
  _ventilador:string;

  constructor(private habitacionService: HabitacionServiceService,
              private alertController: AlertController) { }

  ngOnInit() {
    this.habitacion = new Habitacion(); 
  }

  template() {    
    this.habitacion.idHabitacion = this._idHabitacion;
    this.habitacion.tipo = this._tipo;
    this.habitacion.precio = this._precio;
    this.habitacion.descripcion = this._descripcion;
    this.habitacion.aire = this._aire;
    this.habitacion.ventilador = this._ventilador;
    console.log(this.habitacion);
    this.habitacionService.post(this.habitacion).subscribe(p=>{
      this.confirmacionAgregar();
    });
  }
  
  async confirmacionAgregar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mensaje',
      message: 'Habitacion registrada con exito',
      buttons: ['OK']
    });
    await alert.present();
  }

}
