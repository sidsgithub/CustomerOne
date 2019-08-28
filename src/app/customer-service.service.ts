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
}
