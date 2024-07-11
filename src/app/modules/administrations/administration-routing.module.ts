import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/administration', pathMatch: 'full' },
  { path: 'administration', loadChildren: () => import('./administration.module').then(m => m.administrationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
