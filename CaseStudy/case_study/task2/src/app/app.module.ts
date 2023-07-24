import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CreateContractComponent} from './create-contract/create-contract.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CreateServiceComponent} from './create-service/create-service.component';
import {CreateDetailContractComponent} from './create-detail-contract/create-detail-contract.component';
import {ListCustomerComponent} from './list-customer/list-customer.component';
import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {ListContractComponent} from './list-contract/list-contract.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CreateContractComponent,
    CreateEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    CreateServiceComponent,
    CreateDetailContractComponent,
    ListCustomerComponent,
    ListEmployeeComponent,
    ListContractComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
