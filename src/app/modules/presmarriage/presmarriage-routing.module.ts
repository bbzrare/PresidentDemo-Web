import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresmarriageComponent } from './presmarriage/presmarriage.component';

const routes: Routes = [
  { path: '', component: PresmarriageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresmarriageRoutingModule { }
