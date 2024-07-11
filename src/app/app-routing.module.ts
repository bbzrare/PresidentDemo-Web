import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AdministrationComponent } from './modules/administrations/administration/administration.component';

const routes: Routes = [
  //{ path: 'administration', component: AdministrationComponent },
  //{ path: '', redirectTo: '/administration', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
