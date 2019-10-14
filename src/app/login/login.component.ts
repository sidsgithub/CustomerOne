import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../_models/Employee';
import { FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import { EmployeeServiceService } from '../_services/employee-service.service';
import { Router } from '@angular/router';
import { toASCII } from 'punycode';
import { takeUntil } from 'rxjs/operators';
import { callbackify } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin = false;
  value:boolean;
  constructor(
    private fb:FormBuilder,
    private employeeService:EmployeeServiceService,private router:Router) {}

  employeeForm: FormGroup;
  employeeList:Employee[] = [];  // employeeList:Employee[]=[]
  msg : boolean =true;

  ngOnInit() {
    this.getService();
    this.employeeForm = this.fb.group({
      username: ['',[Validators.required]],
      password:['',[Validators.required]]
  });
}
  onSubmit(){
    this.employeeService.authenticate(this.employeeForm.value,this.employeeForm.value.username)
    .subscribe(data=>{if(data!==null)this.router.navigate(['mainmenu']);else {alert("wrong credentials"); this.invalidLogin = true }})
  }

  onRefresh():void{
    window.location.reload();
  }

  getService() {
    this.employeeService.getAllEmployees().subscribe((data: any)  =>this.employeeList = data);
  }
}