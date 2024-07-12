import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreshobbyComponent } from './preshobby/preshobby.component';

const routes: Routes = [
  { path: '', component: PreshobbyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreshobbyRoutingModule { }
