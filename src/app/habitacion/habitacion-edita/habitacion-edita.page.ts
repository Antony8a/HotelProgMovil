import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Habitacion } from 'src/app/models/habitacion';
import { HabitacionServiceService } from 'src/app/services/habitacion-service.service';

@Component({
  selector: 'app-habitacion-edita',
  templateUrl: './habitacion-edita.page.html',
  styleUrls: ['./habitacion-edita.page.scss'],
})
export class HabitacionEditaPage implements OnInit {

  idhab = null;
  habitacion: Habitacion;
  habitacion2:Habitacion;
  habitaciones: Habitacion[];
  _idHabitacion:string;
  _tipo:string;
  _precio:number;
  _descripcion:string;
  _aire:string;
  _ventilador:string;

  constructor(private activateRoute:ActivatedRoute,
              private habitacionService: HabitacionServiceService,
              private alertController: AlertController) { }

  ngOnInit() {
    this.habitacion = new Habitacion();
    this.idhab = this.activateRoute.snapshot.paramMap.get('idhab');
    this.traerHabitacionSeleccionada(this.idhab);
  }

  traerHabitacionSeleccionada(valor:string){
    this.habitacionService.getId(valor).subscribe(p => {
      this._idHabitacion = p.idHabitacion;
      this._tipo = p.tipo;
      this._precio = p.precio;
      this._descripcion = p.descripcion;
      this._aire = p.aire;
      this._ventilador = p.ventilador;
    });
  }

  template() {    
    this.habitacion.idHabitacion = this._idHabitacion;
    this.habitacion.tipo = this._tipo;
    this.habitacion.precio = this._precio;
    this.habitacion.descripcion = this._descripcion;
    this.habitacion.aire = this._aire;
    this.habitacion.ventilador = this._ventilador;
    console.log(this.habitacion);
    this.habitacionService.put(this.habitacion).subscribe(p=>{
      this.confirmacionEditar();
    });
  }
  
  async confirmacionEditar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mensaje',
      message: 'Habitacion actualizada con exito',
      buttons: ['OK']
    });
    await alert.present();
  }

}
