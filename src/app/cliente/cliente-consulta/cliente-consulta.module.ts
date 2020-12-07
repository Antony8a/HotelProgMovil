import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteConsultaPageRoutingModule } from './cliente-consulta-routing.module';

import { ClienteConsultaPage } from './cliente-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteConsultaPageRoutingModule
  ],
  declarations: []
})
export class ClienteConsultaPageModule {}
