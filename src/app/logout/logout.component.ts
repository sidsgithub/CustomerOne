import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../_services/employee-service.service' ;
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private employeeService:EmployeeServiceService,private router:Router) { }

  ngOnInit() {
  this.employeeService.logOut();
  this.router.navigate(['login'])
  }

}
