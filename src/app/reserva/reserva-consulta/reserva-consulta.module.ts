import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaConsultaPageRoutingModule } from './reserva-consulta-routing.module';

import { ReservaConsultaPage } from './reserva-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaConsultaPageRoutingModule
  ],
  declarations: [ReservaConsultaPage]
})
export class ReservaConsultaPageModule {}
