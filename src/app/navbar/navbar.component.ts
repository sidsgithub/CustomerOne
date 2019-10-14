import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../_services/employee-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private employeeService:EmployeeServiceService) { }

  ngOnInit() {
  }

}
