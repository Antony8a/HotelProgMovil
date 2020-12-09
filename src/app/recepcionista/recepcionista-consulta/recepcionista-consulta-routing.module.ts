import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecepcionistaConsultaPage } from './recepcionista-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: RecepcionistaConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecepcionistaConsultaPageRoutingModule {}
