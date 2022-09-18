import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { DashboardComponent } from './dashboard.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'career', component: CareerComponent },
  { path: 'support', component: SupportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
