import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresmarriageRoutingModule } from './presmarriage-routing.module';
import { PresmarriageComponent } from './presmarriage/presmarriage.component';


@NgModule({
  declarations: [
    PresmarriageComponent
  ],
  imports: [
    CommonModule,
    PresmarriageRoutingModule
  ]
})
export class PresmarriageModule { }
