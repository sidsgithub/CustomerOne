import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  employee:Employee[]=[ { username:"sid",password:"password"} ];
  emp=['kiran'];

  constructor(private http:HttpClient) { }

  public getAllEmployees() {
    return this.http.get('http://localhost:8080/employee/list/');
  }
}
