import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {ListCustomerComponent} from './list-customer/list-customer.component';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './template/navbar/navbar.component';
import {FooterComponent} from './template/footer/footer.component';
import {HeaderComponent} from './template/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        CreateCustomerComponent,
        ListCustomerComponent,
        NavbarComponent,
        NavbarComponent,
        FooterComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    exports: [
        HeaderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
