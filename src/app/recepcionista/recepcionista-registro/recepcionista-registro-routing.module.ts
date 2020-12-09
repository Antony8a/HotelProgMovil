import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecepcionistaRegistroPage } from './recepcionista-registro.page';

const routes: Routes = [
  {
    path: '',
    component: RecepcionistaRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecepcionistaRegistroPageRoutingModule {}
