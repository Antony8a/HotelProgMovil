import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.page.html',
  styleUrls: ['./popinfo.page.scss'],
})
export class PopinfoPage implements OnInit {

  items = Array(6);
  public labels = ['Cliente','Habitacion','Reserva','Recepcionista','Producto','Factura'];
  constructor(private popoverCltr:PopoverController,
    private navContrl:NavController) { }

  ngOnInit() {
    
  }

  onClick(valor:number){
    console.log(valor)
    this.popoverCltr.dismiss({
      item:valor
    })

    if(valor == 1){
     //this.router.navigate(['/cliente-registro']);
      this.navContrl.navigateForward('/cliente-registro');
    }

  }

}
