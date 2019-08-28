import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { DeDuplicationComponent } from './de-duplication/de-duplication.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeServiceService } from './employee-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainMenuComponent,
    DeDuplicationComponent,
    CustomerSearchComponent,
    ListCustomersComponent,
    CustomerDetailsComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
