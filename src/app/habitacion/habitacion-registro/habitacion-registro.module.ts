import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabitacionRegistroPageRoutingModule } from './habitacion-registro-routing.module';

import { HabitacionRegistroPage } from './habitacion-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabitacionRegistroPageRoutingModule
  ],
  declarations: [HabitacionRegistroPage]
})
export class HabitacionRegistroPageModule {}
