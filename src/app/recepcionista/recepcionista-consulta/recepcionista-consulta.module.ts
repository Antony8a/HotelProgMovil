import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecepcionistaConsultaPageRoutingModule } from './recepcionista-consulta-routing.module';

import { RecepcionistaConsultaPage } from './recepcionista-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecepcionistaConsultaPageRoutingModule
  ],
  declarations: [RecepcionistaConsultaPage]
})
export class RecepcionistaConsultaPageModule {}
