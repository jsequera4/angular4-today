import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from "./products.component";
import {ProductComponent} from "./product/product.component";
import {ProductsListComponent} from "./products-list/products-list.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductsListComponent
  ]
})
export class ProductsModule { }
