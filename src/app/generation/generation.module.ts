import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GenerationService} from "./generation.service";
import {GenerationComponent} from "./generation.component";
import {DataTablesModule} from "angular-datatables";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    DataTablesModule
  ],
  declarations: [GenerationComponent],
  providers: [GenerationService],
})
export class GenerationModule { }
