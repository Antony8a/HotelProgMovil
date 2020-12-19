import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Recepcionista } from 'src/app/models/recepcionista';
import { RecepcionistaService } from 'src/app/services/recepcionista.service';

@Component({
  selector: 'app-recepcionista-consulta',
  templateUrl: './recepcionista-consulta.page.html',
  styleUrls: ['./recepcionista-consulta.page.scss'],
})
export class RecepcionistaConsultaPage implements OnInit {


  recepcionista: Recepcionista;
  recepcionistas;

  constructor(
    private recepcionistaService: RecepcionistaService,
    private alertController: AlertController) { }

  ngOnInit() {
    this.recepcionista = new Recepcionista(); 
    this.traerCRecepcionista();
  }

  traerCRecepcionista(){
    this.recepcionistaService.get()
      .subscribe(
        (datos)=>{this.recepcionistas=datos;},
        (error)=>{console.log(error);}
      );
  }

  traerRecepcionistaSeleccionado(valor:string){
    this.recepcionistaService.getId(valor).subscribe(p => {
        this.presentAlert(p);
    });
  }

  //alert que confirma el encuentro del recepcionista registrado
  async presentAlert(recepcionistac:Recepcionista) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mensaje',
      subHeader: recepcionistac.identificacion+' - '+recepcionistac.nombre,
      message: 'Recepcionista encontrado.',
      buttons: [{
        text: 'Eliminar?',
        handler: () => {
          this.delete(recepcionistac.identificacion);
          this.ngOnInit();
        }
      },'Cancelar'
    ]
    });
    await alert.present();
  }

    //metodo para eliminar
    delete(identificacion: string) {
      this.recepcionistaService.delete(identificacion).subscribe(p => {
        this.confirmacionEliminar();
        console.log('Recepcionista: '+identificacion+' eliminado');
      });
      this.ngOnInit();
    }

    //alert que confima la posible eliminacion
    async confirmacionEliminar() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Mensaje',
        message: 'Recepcionista Eliminado con exito',
        buttons: ['OK']
      });
      await alert.present();
    }

      //de aqui para allá va el update en alerts

  async presentAlertPrompt(recepcionistax: Recepcionista) {
    
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'Nombre',
          type: 'text',
          value: recepcionistax.nombre,
          placeholder: 'Nombre'
        },
        {
          name: 'Edad',
          type: 'number',
          value: recepcionistax.edad,
          placeholder: 'edad'
        },
        {
          name: 'Sexo',
          type: 'text',
          value: recepcionistax.sexo,
          placeholder: 'sexo'
        },
        {
          name: 'Direccion',
          type: 'text',
          value: recepcionistax.direccion,
          placeholder: 'direccion'
        },
        {
          name: 'Celular',
          type: 'text',
          value: recepcionistax.celular,
          placeholder: 'celular'
        },
        {
          name: 'Correo',
          type: 'text',
          value: recepcionistax.correo,
          placeholder: 'correo'
        },
        {
          name: 'Usuario',
          type: 'text',
          value: recepcionistax.usuario,
          placeholder: 'usuario'
        },
        {
          name: 'Password',
          type: 'password',
          value: recepcionistax.password,
          placeholder: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirmar',
          handler: (data) => {
            this.recepcionista.identificacion = recepcionistax.identificacion;
            this.recepcionista.nombre = data.Nombre;
            this.recepcionista.correo = data.Correo;
            this.recepcionista.direccion = data.Direccion;
            this.recepcionista.edad = data.Edad;
            this.recepcionista.password = data.Password;
            this.recepcionista.sexo = data.Sexo;
            this.recepcionista.celular = data.Celular;
            this.recepcionista.usuario = data.Usuario;
            console.log(this.recepcionista);
            this.update(this.recepcionista);
            this.confirmaActualizacion();
            this.ngOnInit();
          }
        }
      ]
    });
    await alert.present();
  }

  update(recepcionistad:Recepcionista){
    this.recepcionistaService.put(recepcionistad).subscribe(p => {});
  }

  async confirmaActualizacion() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mensaje',
      message: 'Recepcionista Acualizado con exito',
      buttons: ['OK']
    });
    await alert.present();
  }

}
