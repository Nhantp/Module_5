import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductUpdateComponent} from './product-update/product-update.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ProductCheckComponent} from './product-check/product-check.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ProductCreateComponent,
    ProductListComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ProductCheckComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ]
})
export class ProductModule {
}
