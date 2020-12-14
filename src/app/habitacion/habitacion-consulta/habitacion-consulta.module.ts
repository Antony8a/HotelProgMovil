import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabitacionConsultaPageRoutingModule } from './habitacion-consulta-routing.module';

import { HabitacionConsultaPage } from './habitacion-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabitacionConsultaPageRoutingModule
  ],
  declarations: [HabitacionConsultaPage]
})
export class HabitacionConsultaPageModule {}
