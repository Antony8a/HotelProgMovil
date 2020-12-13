import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteStatePage } from './cliente-state.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteStatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteStatePageRoutingModule {}
