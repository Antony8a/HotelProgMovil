import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecepcionistaRegistroPageRoutingModule } from './recepcionista-registro-routing.module';

import { RecepcionistaRegistroPage } from './recepcionista-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecepcionistaRegistroPageRoutingModule
  ],
  declarations: [RecepcionistaRegistroPage]
})
export class RecepcionistaRegistroPageModule {}
