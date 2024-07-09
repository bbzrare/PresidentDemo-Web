import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { AppComponent } from './app.component';
import { MyComponent } from './my-component/my-component.component';

@NgModule({
  declarations: [AppComponent, MyComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzTableModule,
    NzIconModule,
    NzDropDownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
