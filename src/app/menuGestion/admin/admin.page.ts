import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';
import { PopinfoPage } from 'src/app/menupop/popinfo/popinfo.page';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {


  constructor(public popoverController: PopoverController,
    private router:Router,
    private navContrl: NavController
    ) { }

  

  ngOnInit() {
  }

  async mostrarPop(ev: any) {
    const popover = await this.popoverController.create({
      component: PopinfoPage,
      //cssClass: 'my-custom-class',
      event: ev,
      mode:'ios'
      //translucent: true
    });
    await popover.present();

    const {data}= await popover.onWillDismiss();
    console.log('padre',data);
    //if(data == 1){
      //this.router.navigate(['/cliente-registro']);
      //this.navContrl.navigateForward('/cliente-registro');
    //}
  }

}
