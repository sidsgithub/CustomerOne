import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../_models/Customer';
import { CustomerServiceService } from '../_services/customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  addCustomerForm :FormGroup;
  constructor(private fb:FormBuilder,
    private customerService : CustomerServiceService,
    private router:Router) { }
  
  customerList =[];
  ngOnInit() {
    this.addCustomerForm = this.fb.group({
    customername: ['',[Validators.required]],
    dob: ['',[Validators.required]],
    address_line1: ['',[Validators.required]],
    address_line2: ['',[Validators.required]],
    city: ['',[Validators.required]],
    pincode: ['',[Validators.required]],
    email: [''],
    pan_number: [''],
    contact_number: ['',[Validators.required]],
    occupation: ['',[Validators.required]],
    income: [''],
    user_id: ['',[Validators.required]],
    password: ['',[Validators.required]],
    repassword: ['',[Validators.required]],
    account:this.fb.group({
      account_number:[''],
      account_holder_name:[''],
      balance:['']
    })
    });
  }
  onSubmit():void{
    this.customerList.push(this.addCustomerForm.value);
    console.log(this.customerList[0]);
    this.saveCustomer(this.customerList[0]);
    this.customerList.pop();
  }

  saveCustomer(data:Customer){
    this.customerService.saveCustomer(data).subscribe(data => console.log(data));
    console.log(JSON.stringify(data));
    console.log("customer added",data.customername);
  }
  onBack(){
    this.router.navigate(['mainmenu'])
  }
}
