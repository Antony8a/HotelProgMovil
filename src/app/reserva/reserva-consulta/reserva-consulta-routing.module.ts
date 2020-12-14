import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaConsultaPage } from './reserva-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaConsultaPageRoutingModule {}
