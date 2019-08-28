import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../Employee';
import { FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  value:boolean;
  constructor(
    private fb:FormBuilder,
    private employeeService:EmployeeServiceService,private router:Router) {}

  employeeForm: FormGroup;
  employeeList:Employee[] = [];  // employeeList:Employee[]=[]
  toMainMenu:boolean = false;
  msg : boolean =true;

  ngOnInit() {
    this.getService();
    this.employeeForm = this.fb.group({
      username: ['',[Validators.required]],
      password:['',[Validators.required]]
  });
}
  checkValidity(data:Employee){
    // console.log("the username and password passed is ",data.username,data.password)
    for(let emp of this.employeeList)
    {
      // console.log(emp);
      if(data.username == emp.username){
        if(data.password == emp.password){
          // console.log("user and password")
          return true;
        }
        // console.log("username")
      }
    }
    return false;
  }
  onSubmit():void{
    // this.employeeList.push(this.employeeForm.value)
    this.toMainMenu = this.checkValidity(this.employeeForm.value)
    if(this.toMainMenu){
      this.router.navigate(['mainmenu'])
    }
    else{
    this.msg= false;
    }
  }
  getService() {
    this.employeeService.getAllEmployees().subscribe((data: Employee[])  =>this.employeeList = data);   
    // this.employeeService.getAllEmployees().subscribe((data: Employee[])  =>console.log(data));  
  }

}