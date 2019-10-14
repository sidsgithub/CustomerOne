import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http:HttpClient) { }

  public saveCustomer(data) {
    alert(JSON.stringify(data));
    return this.http.post("http://localhost:8080/customer/add", JSON.stringify(data), { headers: this.headers });
  }
  
  public getAllCustomer(){
    return this.http.get("http://localhost:8080/customer/findall");
  }
  

  public findCustomerByName(data) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    }
    return this.http.post("http://localhost:8080/customer/findname", data, {headers:headers});
  }

  public findCustomerById(data) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    }
    return this.http.post("http://localhost:8080/customer/findid", data, {headers:headers});
  }

  public findCustomerByDob(data) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    }
    return this.http.post("http://localhost:8080/customer/finddob", data,{headers:headers});
  }

  public findCustomerByEmail(data) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    }
    return this.http.post("http://localhost:8080/customer/findemail", data, {headers:headers});
  }

  public findCustomerByPan(data) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    }
    return this.http.post("http://localhost:8080/customer/findpan", data,{headers:headers});
  }

  public findCustomerByContact(data) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    }
    return this.http.post("http://localhost:8080/customer/findcontact", data, {headers:headers});
  }

}
