import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Cliente } from 'src/app/models/cliente';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';

@Component({
  selector: 'app-cliente-consulta',
  templateUrl: './cliente-consulta.page.html',
  styleUrls: ['./cliente-consulta.page.scss'],
})
export class ClienteConsultaPage implements OnInit {

  cliente: Cliente;
  clientes;

  constructor(
    private clienteService: ClienteServiceService,
    private alertController: AlertController) { }

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

  //alert que confirma el encuentro del cliente registrado
  async presentAlert(clientec:Cliente) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mensaje',
      subHeader: clientec.identificacion+' - '+clientec.nombre,
      message: 'Cliente encontrado.',
      buttons: [{
        text: 'Eliminar?',
        handler: () => {
          this.delete(clientec.identificacion);
          this.ngOnInit();
        }
      },'Cancelar'
    ]
    });
    await alert.present();
  }

    //metodo para eliminar
    delete(identificacion: string) {
      this.clienteService.delete(identificacion).subscribe(p => {
        this.confirmacionEliminar();
        console.log('CLIENTE: '+identificacion+' eliminado');
      });
      this.ngOnInit();
    }

    //alert que confima la posible eliminacion
    async confirmacionEliminar() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Mensaje',
        message: 'Cliente Eliminado con exito',
        buttons: ['OK']
      });
      await alert.present();
    }

      //de aqui para allá va el update en alerts

  async presentAlertPrompt(clientex: Cliente) {
    
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'Nombre',
          type: 'text',
          value: clientex.nombre,
          placeholder: 'Nombre'
        },
        {
          name: 'Edad',
          type: 'number',
          value: clientex.edad,
          placeholder: 'edad'
        },
        {
          name: 'Sexo',
          type: 'text',
          value: clientex.sexo,
          placeholder: 'sexo'
        },
        {
          name: 'Direccion',
          type: 'text',
          value: clientex.direccion,
          placeholder: 'direccion'
        },
        {
          name: 'Celular',
          type: 'text',
          value: clientex.celular,
          placeholder: 'celular'
        },
        {
          name: 'Correo',
          type: 'text',
          value: clientex.correo,
          placeholder: 'correo'
        },
        {
          name: 'Usuario',
          type: 'text',
          value: clientex.usuario,
          placeholder: 'usuario'
        },
        {
          name: 'Password',
          type: 'text',
          value: clientex.password,
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
            this.cliente.identificacion = clientex.identificacion;
            this.cliente.nombre = data.Nombre;
            this.cliente.correo = data.Correo;
            this.cliente.direccion = data.Direccion;
            this.cliente.edad = data.Edad;
            this.cliente.password = data.Password;
            this.cliente.sexo = data.Sexo;
            this.cliente.celular = data.Celular;
            this.cliente.usuario = data.Usuario;
            console.log(this.cliente);
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
    this.clienteService.put(this.cliente).subscribe(p => {});
  }

  async confirmaActualizacion() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mensaje',
      message: 'Cliente Acualizado con exito',
      buttons: ['OK']
    });
    await alert.present();
  }
}
