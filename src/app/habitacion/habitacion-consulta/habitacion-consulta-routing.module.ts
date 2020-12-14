import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabitacionConsultaPage } from './habitacion-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: HabitacionConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabitacionConsultaPageRoutingModule {}
