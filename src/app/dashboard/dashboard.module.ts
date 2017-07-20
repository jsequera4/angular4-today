import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {OverviewComponent} from "./overview/overview.component";
import {StatsComponent} from "./stats/stats.component";
import {EasyPieChartModule} from "ng2modules-easypiechart";

@NgModule({
  imports: [
    CommonModule,
    EasyPieChartModule
  ],
  declarations: [
      DashboardComponent,
      OverviewComponent,
      StatsComponent
  ]
})
export class DashboardModule { }
