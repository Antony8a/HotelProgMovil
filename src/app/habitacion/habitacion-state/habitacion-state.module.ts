import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabitacionStatePageRoutingModule } from './habitacion-state-routing.module';

import { HabitacionStatePage } from './habitacion-state.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabitacionStatePageRoutingModule
  ],
  declarations: [HabitacionStatePage]
})
export class HabitacionStatePageModule {}
