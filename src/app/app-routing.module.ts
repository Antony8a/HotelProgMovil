import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'habitaciones',
    loadChildren: () => import('./menuinicio/habitaciones/habitaciones.module').then( m => m.HabitacionesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./menuinicio/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./menuGestion/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'recepcionista',
    loadChildren: () => import('./menuGestion/recepcionista/recepcionista.module').then( m => m.RecepcionistaPageModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./menuGestion/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'popinfo',
    loadChildren: () => import('./menupop/popinfo/popinfo.module').then( m => m.PopinfoPageModule)
  },
  {
    path: 'cliente-registro',
    loadChildren: () => import('./cliente/cliente-registro/cliente-registro.module').then( m => m.ClienteRegistroPageModule)
  },
  {
    path: 'cliente-consulta',
    loadChildren: () => import('./cliente/cliente-consulta/cliente-consulta.module').then( m => m.ClienteConsultaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}