import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabitacionEditaPageRoutingModule } from './habitacion-edita-routing.module';

import { HabitacionEditaPage } from './habitacion-edita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabitacionEditaPageRoutingModule
  ],
  declarations: [HabitacionEditaPage]
})
export class HabitacionEditaPageModule {}
