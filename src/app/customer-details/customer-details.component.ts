import { Component, OnInit} from '@angular/core';
import { Customer } from '../_models/Customer'
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  CustomerName:Customer[];
  // customer:Customer[]=[]
  constructor(private router: Router) {
    this.CustomerName = JSON.parse(localStorage.getItem("customerName"));
   }

  ngOnInit() {
    this.CustomerName = JSON.parse(localStorage.getItem("cs"));
    console.log(this.CustomerName);

  }
  onBack(){
    this.router.navigate(['search'])
  }

  
}
