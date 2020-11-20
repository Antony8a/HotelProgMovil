import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Cliente } from 'src/app/models/cliente';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.page.html',
  styleUrls: ['./cliente-registro.page.scss'],
})
export class ClienteRegistroPage implements OnInit {

  cliente: Cliente;
  clientes;
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

  constructor(private clienteService: ClienteServiceService,
    private alertController: AlertController,
    private navContrl:NavController
    ) { }

  ngOnInit() {
    
    this.cliente = new Cliente(); 
    this.traerClientes();
  }

  traerClientes(){
    this.clienteService.get()
      .subscribe(
        (datos)=>{this.clientes=datos;},
        (error)=>{console.log(error);}
      );
  }

  traerClienteSeleccionado(valor:string){
    this.clienteService.getId(valor).subscribe(p => {
        this.presentAlert(p);
    });
  }

  template() {
    this.cliente.identificacion = this._identificacion;
    this.cliente.nombre = this._nombre;
    this.cliente.correo = this._correo;
    this.cliente.direccion = this._direccion;
    this.cliente.edad = this._edad;
    this.cliente.password = this._password;
    this.cliente.sexo = this._sexo;
    this.cliente.usuario = this._usuario;
    console.log(this.cliente);
    this.clienteService.post(this.cliente).subscribe((datosRetornadosDelServicio)=>{
      this.datosRetornadosDelServicio = JSON.stringify(datosRetornadosDelServicio);
    });
  }

  async VerCliente(idc:string) {
    
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlert(clientec:Cliente) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: clientec.nombre,
      subHeader: clientec.identificacion,
      message: 'Cliente encontrado. pRUEBA PARA ELIMINAR',
      buttons: [{
        text: 'ELIMINAR?',
        handler: () => {
          this.delete(clientec.identificacion);
        }
      }]
    });

    await alert.present();
  }

  delete(identificacion: string) {
    this.clienteService.delete(identificacion).subscribe(p => {
      console.log('CLIENTE: '+identificacion+' eliminado');
    });
  }

}
