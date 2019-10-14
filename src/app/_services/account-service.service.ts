import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private http:HttpClient) { }

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  public findCustomerByAccount(data) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    }
    console.log("from account service the data comming is"+data)
    return this.http.post("http://localhost:8080/account/findaccount", data, {headers:headers});
  }
}
