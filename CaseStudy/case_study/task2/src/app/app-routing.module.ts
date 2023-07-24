import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from './list-customer/list-customer.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';


const routes: Routes = [{
  path: 'customer/list',
  component: ListCustomerComponent
}, {
  path: 'customer/create',
  component: CreateCustomerComponent
}, {
  path: 'employee/create',
  component: CreateEmployeeComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
