import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { SupportComponent } from './support/support.component';
import { HeaderComponent } from '../shared/header/header.component';


@NgModule({
  declarations: [
    AboutComponent,
    CareerComponent,
    SupportComponent, HeaderComponent
  ], bootstrap: [HeaderComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
