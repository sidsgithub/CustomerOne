import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LoginComponent } from './login/login.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { DeDuplicationComponent } from './de-duplication/de-duplication.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

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
    path:"deduplicate",component : DeDuplicationComponent
  },
  {
    path:"addnew",component : AddCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
