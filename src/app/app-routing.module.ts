import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LoginComponent } from './login/login.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { DeDuplicationComponent } from './de-duplication/de-duplication.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationService } from './_services/authentication.service';
import {AccountDetailsComponent} from './account-details/account-details.component';

const routes: Routes = [
  {
    path:"mainmenu", component: MainMenuComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"",redirectTo:'/login',pathMatch:'full'
  },
  {
    path:"search",component : CustomerSearchComponent
  },
  {
    path:"deduplicate",component : DeDuplicationComponent,canActivate:[AuthenticationService]
  },
  {
    path:"addnew",component : AddCustomerComponent,canActivate:[AuthenticationService]
  },

  {
    path:"addsearch",component : CustomerDetailsComponent
  },
  {
    path:"addaccsearch",component : AccountDetailsComponent
  },
  {
    path:"logout",component : LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
