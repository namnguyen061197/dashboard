import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes : Routes = [
  {
    path:'',
    component:DashboardComponent
  }
]



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
