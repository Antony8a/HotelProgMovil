import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Recepcionista } from 'src/app/models/recepcionista';
import { RecepcionistaService } from 'src/app/services/recepcionista.service';

@Component({
  selector: 'app-recepcionista-registro',
  templateUrl: './recepcionista-registro.page.html',
  styleUrls: ['./recepcionista-registro.page.scss'],
})
export class RecepcionistaRegistroPage implements OnInit {

  recepcionista: Recepcionista;
  recepcionistas;
  _identificacion: string;
  _nombre: string;
  _edad: number;
  _sexo: string;
  _direccion: string;
  _celular: string;
  _correo: string;
  _usuario: string;
  _password: string;

  datosRetornadosDelServicio:any="";

  constructor(
    private recepcionistaService: RecepcionistaService,
    private alertController: AlertController) { }

  ngOnInit() {
    this.recepcionista = new Recepcionista(); 
    this.traerRecepcionista();
  }

  traerRecepcionista(){
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

  template() {    
    this.recepcionista.identificacion = this._identificacion;
    this.recepcionista.nombre = this._nombre;
    this.recepcionista.correo = this._correo;
    this.recepcionista.direccion = this._direccion;
    this.recepcionista.edad = this._edad;
    this.recepcionista.password = this._password;
    this.recepcionista.celular = this._celular;
    this.recepcionista.sexo = this._sexo;
    this.recepcionista.usuario = this._usuario;
    console.log(this.recepcionista);
    this.recepcionistaService.post(this.recepcionista).subscribe(p=>{
      this.confirmacionAgregar();
      this.traerRecepcionista();
    });
  }

  //alert que confirma el encuentro de la recepcionista registrada
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

  //alert que confima el add
  async confirmacionAgregar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mensaje',
      message: 'Recepcionista Agregado con exito',
      buttons: ['OK']
    });
    await alert.present();
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

  //metodo para eliminar
  delete(identificacion: string) {
    this.recepcionistaService.delete(identificacion).subscribe(p => {
      this.confirmacionEliminar();
      console.log('Recepcionista: '+identificacion+' eliminado');
    });
    this.ngOnInit();
  }



  //de aqui para allá va el update en alerts

  async presentAlertPrompt(recepcionistax: Recepcionista) {
    
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Actualizar',
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
          type: 'text',
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
            this.update();
            this.confirmaActualizacion();
            this.ngOnInit();
          }
        }
      ]
    });
    await alert.present();
  }

  update(){
    this.recepcionistaService.put(this.recepcionista).subscribe(p => {});
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
