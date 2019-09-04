package com.example.CustomerOneWeb.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Customer")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int customerid;
	@Column(nullable = false)
	private String customername;
	@Column(nullable = false)
	private String dob;
	@Column(nullable = false)
	private String address_line1;
	@Column(nullable = false)
	private String address_line2;
	private String city;
	private int pincode;
	private String email;
	private String pan_number;
	@Column(unique = true, nullable = false, length = 10)
	private int contact_number;
	@Column(nullable = false)
	private String occupation;
	private int income;
	@Column(unique = true, nullable = false)
	private int user_id ;
	@Column(unique = true, nullable = false)
	private String password;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="customerId")
	private Set<Account> account;
    
	public Set<Account> getAccount() {
		return account;
	}
	public void setAccount(Set<Account> account) {
		this.account = account;
	}
	public int getCustomerid() {
		return customerid;
	}
	public void setCustomerid(int customerid) {
		this.customerid = customerid;
	}
	public String getCustomername() {
		return customername;
	}
	public void setCustomername(String customername) {
		this.customername = customername;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getAddress_line1() {
		return address_line1;
	}
	public void setAddress_line1(String address_line1) {
		this.address_line1 = address_line1;
	}
	public String getAddress_line2() {
		return address_line2;
	}
	public void setAddress_line2(String address_line2) {
		this.address_line2 = address_line2;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPan_number() {
		return pan_number;
	}
	public void setPan_number(String pan_number) {
		this.pan_number = pan_number;
	}
	public int getContact_number() {
		return contact_number;
	}
	public void setContact_number(int contact_number) {
		this.contact_number = contact_number;
	}
	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	public int getIncome() {
		return income;
	}
	public void setIncome(int income) {
		this.income = income;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

}
