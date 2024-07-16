import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PresidentRoutingModule } from './president-routing.module';
import { PresidentComponent } from './president/president.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';


@NgModule({
  declarations: [
    PresidentComponent
  ],
  imports: [
    CommonModule,
    PresidentRoutingModule,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzTableModule,
    NzIconModule,
    NzDropDownModule,
    NzPageHeaderModule,
    NzInputNumberModule,
    NzTreeSelectModule,
  ]
})
export class PresidentModule { }
