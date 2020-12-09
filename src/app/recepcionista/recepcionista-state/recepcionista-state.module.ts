import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecepcionistaStatePageRoutingModule } from './recepcionista-state-routing.module';

import { RecepcionistaStatePage } from './recepcionista-state.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecepcionistaStatePageRoutingModule
  ],
  declarations: [RecepcionistaStatePage]
})
export class RecepcionistaStatePageModule {}
