import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Employee } from '../_models/Employee';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
import { callbackify } from 'util';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  value:Object;
  constructor(private http:HttpClient,_router:Router) { }
  public getAllEmployees() {
    return this.http.get('http://localhost:8080/employee/list/');
  }
  authenticate(data,username){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    }
     return this.http.post("http://localhost:8080/employee/checking", data, options)
          .pipe(map((res: Response )=> res,sessionStorage.setItem("username",username)))
    }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('username');
    return !(user===null)
  }
  isUserRoot(){
    if(sessionStorage.getItem('username') == 'root')
    return true;
    else
    return false;
  }

  logOut(){
    sessionStorage.removeItem('username');
  }
  
}