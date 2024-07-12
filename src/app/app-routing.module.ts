import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ''
    , redirectTo: ''
    , pathMatch: 'full'
  },
  { path: 'Administration', loadChildren: () => import('./modules/administrations/administration.module').then(m => m.AdministrationModule) },
  { path: 'Adminprvp', loadChildren: () => import('./modules/adminprvp/admin-pr-vp.module').then(m => m.AdminPrVpModule) },
  { path: 'Election', loadChildren: () => import('./modules/election/election.module').then(m => m.ElectionModule) },
  { path: 'Preshobby', loadChildren: () => import('./modules/preshobby/preshobby.module').then(m => m.PreshobbyModule) },
  { path: 'President', loadChildren: () => import('./modules/president/president.module').then(m => m.PresidentModule) },
  { path: 'Presmarriage', loadChildren: () => import('./modules/presmarriage/presmarriage.module').then(m => m.PresmarriageModule) },
  { path: 'State', loadChildren: () => import('./modules/state/state.module').then(m => m.StateModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
