import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';
import { CategoryCheckComponent } from './category-check/category-check.component';


@NgModule({
  declarations: [CategoryCreateComponent, CategoryListComponent, CategoryUpdateComponent, CategoryDeleteComponent, CategoryCheckComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
