import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Cliente } from 'src/app/models/cliente';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';

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
    this.clienteService.add(this.cliente).subscribe((datosRetornadosDelServicio)=>{
      this.datosRetornadosDelServicio = JSON.stringify(datosRetornadosDelServicio);
    });


  }

}
