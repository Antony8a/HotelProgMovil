import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabitacionRegistroPage } from './habitacion-registro.page';

const routes: Routes = [
  {
    path: '',
    component: HabitacionRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabitacionRegistroPageRoutingModule {}
