import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecepcionistaStatePage } from './recepcionista-state.page';

const routes: Routes = [
  {
    path: '',
    component: RecepcionistaStatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecepcionistaStatePageRoutingModule {}
