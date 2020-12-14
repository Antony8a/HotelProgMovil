import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabitacionStatePage } from './habitacion-state.page';

const routes: Routes = [
  {
    path: '',
    component: HabitacionStatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabitacionStatePageRoutingModule {}
