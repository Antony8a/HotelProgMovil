import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabitacionEditaPage } from './habitacion-edita.page';

const routes: Routes = [
  {
    path: '',
    component: HabitacionEditaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabitacionEditaPageRoutingModule {}
