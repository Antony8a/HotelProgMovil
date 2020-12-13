import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteStatePageRoutingModule } from './cliente-state-routing.module';

import { ClienteStatePage } from './cliente-state.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteStatePageRoutingModule
  ],
  declarations: [ClienteStatePage]
})
export class ClienteStatePageModule {}
