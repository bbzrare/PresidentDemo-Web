import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresidentRoutingModule } from './president-routing.module';
import { PresidentComponent } from './president/president.component';


@NgModule({
  declarations: [
    PresidentComponent
  ],
  imports: [
    CommonModule,
    PresidentRoutingModule
  ]
})
export class PresidentModule { }
