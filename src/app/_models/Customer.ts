import {Account}from'./Account';
export class Customer{
    customerid? :number;
    customername?: String;
    dob?: String;
    address_line1?: String;
    address_line2?: String
    city?: String;
    pincode?: number;
    email?: String;
    pan_number?: String;
    contact_number?: number;
    occupation?: String;
    income?: number;
    user_id?: String;
    password?: String;
    repassword?: String;
    account?:Account;
}