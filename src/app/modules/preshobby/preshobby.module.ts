import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreshobbyRoutingModule } from './preshobby-routing.module';
import { PreshobbyComponent } from './preshobby/preshobby.component';


@NgModule({
  declarations: [
    PreshobbyComponent
  ],
  imports: [
    CommonModule,
    PreshobbyRoutingModule
  ]
})
export class PreshobbyModule { }
