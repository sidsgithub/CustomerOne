import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgControl } from '@angular/forms';
import { CustomerServiceService } from '../_services/customer-service.service';
import { Router } from '@angular/router';
import { Customer } from '../_models/Customer';
import { AccountServiceService } from '../_services/account-service.service';
import { Account } from '../_models/Account';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {
  constructor(private customerService:CustomerServiceService,
    private accountService : AccountServiceService,
    private router:Router) { }
  addCustomerForm :FormGroup;
  onchangename: boolean = false;
  onchangeid: boolean = false;
  onchangedob: boolean = false;
  onchangeh: boolean = false;
  onchangeemail: boolean = false;
  onchangepan: boolean = false;
  onchangecontact: boolean = false;
  onBack(){
    this.router.navigate(['mainmenu'])
  }
  customerList:any;
  accountList:any;
  // accountList:any;
  ngOnInit() {
    this.addCustomerForm = new FormGroup({
      customername: new FormControl(),
      customerid: new FormControl(),
      dob:new FormControl(),
      email: new FormControl(),
      account_number:new FormControl(),
      pan_number: new FormControl(),
      contact_number: new FormControl(),
      });
  }
  name:String;
  onSubmit(data){
    if(this.addCustomerForm.get('customername').value!=null){
      this.customerService.findCustomerByName(JSON.stringify(data))
          .subscribe(mydata => {
            this.customerList = mydata;
            localStorage.setItem("cs",JSON.stringify(this.customerList))
            if(this.customerList.length <= 0){
              alert("no such entry")
            }
            else
            this.router.navigate(['addsearch'])
          } );
    }
    if(this.addCustomerForm.get('customerid').value!=null){
      this.customerService.findCustomerById(JSON.stringify(data))
        .subscribe(mydata => {
          this.customerList = mydata;
          localStorage.setItem("cs",JSON.stringify(this.customerList));
          if(this.customerList.length <= 0){
            alert("no such entry")
          }
          else
          this.router.navigate(['addsearch'])
      });
    }
      
    if(this.addCustomerForm.get('dob').value!=null){
      this.customerService.findCustomerByDob(JSON.stringify(data))
        .subscribe(mydata =>{
         this.customerList = mydata;
         localStorage.setItem("cs",JSON.stringify(this.customerList));
         if(this.customerList.length <= 0){
          alert("no such entry")
        }
        else
         this.router.navigate(['addsearch'])
        }
         );
    }
    if(this.addCustomerForm.get('account_number').value!=null){
      this.accountService.findCustomerByAccount(JSON.stringify(data))
          .subscribe(mydata => {
            // console.log("from customer component"+mydata);
            this.accountList = mydata;
            localStorage.setItem("ac",JSON.stringify(this.accountList))
            if(this.accountList.length <= 0){
              alert("no such entry")
            }
            else
            this.router.navigate(['addaccsearch'])
          } );
    }
    if(this.addCustomerForm.get('email').value!=null){
      console.log(this.addCustomerForm.get('email').value)
      this.customerService.findCustomerByEmail(JSON.stringify(data)).subscribe(mydata => {
        this.customerList = mydata;
        localStorage.setItem("cs",JSON.stringify(this.customerList));
        if(this.customerList.length <= 0){
          alert("no such entry")
        }
        else
        this.router.navigate(["addsearch"]);
      });
    }
    if(this.addCustomerForm.get('pan_number').value!=null){
      console.log(data);
      this.customerService.findCustomerByPan(JSON.stringify(data)).subscribe(mydata => 
        {
          this.customerList = mydata;
          localStorage.setItem("cs",JSON.stringify(this.customerList));
          if(this.customerList.length <= 0){
            alert("no such entry")
          }
          else
          this.router.navigate(["addsearch"]);
        });
    }
    if(this.addCustomerForm.get('contact_number').value!=null){
      console.log(this.addCustomerForm.get('contact_number').value)
      // this.customerService.findCustomerByContact(this.addCustomerForm.value);
      console.log(data);
      // this.customerService.findCustomerByContact(data).subscribe(data => console.log("this data after",data));
      this.customerService.findCustomerByContact(JSON.stringify(data))
      .subscribe(mydata => {
        this.customerList = mydata;
        localStorage.setItem("cs",JSON.stringify(this.customerList));
        if(this.customerList.length <= 0){
          alert("no such entry")
        }
        else
      this.router.navigate(["addsearch"]);
    });
    
    }
  }
  onSubmit2()
  {
    localStorage.setItem("customerName",JSON.stringify(this.customerList));
  }
}