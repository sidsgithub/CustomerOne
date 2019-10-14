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
import { EmployeeServiceService } from './_services/employee-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DisableDirective } from './disable.directive';
import { LogoutComponent } from './logout/logout.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
// import { AuthGuardComponent } from './auth-guard/auth-guard.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    AppComponent,
    LoginComponent,
    MainMenuComponent,
    DeDuplicationComponent,
    CustomerSearchComponent,
    ListCustomersComponent,
    CustomerDetailsComponent,
    AddCustomerComponent,
    DisableDirective,
    LogoutComponent,
    AccountDetailsComponent,
    // AuthGuardComponent
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
