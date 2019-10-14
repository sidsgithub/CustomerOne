import { Component, OnInit } from '@angular/core';
import { Account } from '../_models/Account';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  AccountList:Account[];
  constructor(private router: Router) {
    this.AccountList = JSON.parse(localStorage.getItem("ac"));
   }

  ngOnInit() {
    this.AccountList = JSON.parse(localStorage.getItem("ac"));
    console.log(this.AccountList);

  }
  onBack(){
    this.router.navigate(['search'])
  }
}
