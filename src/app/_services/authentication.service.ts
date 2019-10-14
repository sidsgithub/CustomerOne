import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {EmployeeServiceService} from '../_services/employee-service.service'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  constructor(private http : HttpClient,private router:Router,private employeeService:EmployeeServiceService) {
   }
   canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
     return this.employeeService.isUserRoot()
   }
}