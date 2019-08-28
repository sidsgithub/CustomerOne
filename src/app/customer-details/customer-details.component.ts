import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer'

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer:Customer[]=[]
  constructor() { }

  ngOnInit() {
  }

}
