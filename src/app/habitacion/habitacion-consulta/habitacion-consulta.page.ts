import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Habitacion } from 'src/app/models/habitacion';
import { HabitacionServiceService } from 'src/app/services/habitacion-service.service';

@Component({
  selector: 'app-habitacion-consulta',
  templateUrl: './habitacion-consulta.page.html',
  styleUrls: ['./habitacion-consulta.page.scss'],
})
export class HabitacionConsultaPage implements OnInit {
  
  habitacion: Habitacion;
  habitaciones;

  constructor(
    private habitacionService: HabitacionServiceService,
    private alertController: AlertController) { }

    ngOnInit() {
      this.habitacion = new Habitacion(); 
      this.traerHabitacion();
    }
  
    traerHabitacion(){
      this.habitacionService.get()
        .subscribe(
          (datos)=>{this.habitaciones=datos;},
          (error)=>{console.log(error);}
        );
    }
  
    traerHabiatcionSeleccionada(valor:string){
      this.habitacionService.getId(valor).subscribe(p => {
          this.presentAlert(p);
      });
    }
  
    //alert que confirma el encuentro de la habitacion registrada
    async presentAlert(habitacionc:Habitacion) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Mensaje',
        subHeader: habitacionc.idHabitacion+' - '+habitacionc.tipo,
        message: 'habitacion encontrada.',
        buttons: [{
          text: 'Eliminar?',
          handler: () => {
            this.delete(habitacionc.idHabitacion);
            this.ngOnInit();
          }
        },'Cancelar'
      ]
      });
      await alert.present();
    }
  
      //metodo para eliminar
      delete(identificacion: string) {
        this.habitacionService.delete(identificacion).subscribe(p => {
          this.confirmacionEliminar();
          console.log('habitacion: '+identificacion+' eliminada');
        });
        this.ngOnInit();
      }
  
      //alert que confima la posible eliminacion
      async confirmacionEliminar() {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Mensaje',
          message: 'Habitacion Eliminada con exito',
          buttons: ['OK']
        });
        await alert.present();
      }
}
