package com.example.CustomerOneWeb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.CustomerOneWeb.dao.CustomerRepository;
import com.example.CustomerOneWeb.model.Customer;


@Service
public class CustomerService {
	@Autowired
	CustomerRepository customerRepository;
	public List<Customer> getAll(){
		return customerRepository.findAll();	
	}
	public void saveCustomer(Customer customer) {
		customerRepository.save(customer);	
	}
	public List<Customer> getDetailsUsingName(String customername) {
		return customerRepository.getname(customername);
	}
	public List<Customer> getDetailsUsingId(int customerid) {
		return customerRepository.getid(customerid);
	}
	public List<Customer> getDetailsUsingDob(String dob) {
		return customerRepository.getdob(dob);
	}
	public List<Customer> getDetailsUsingEmail(String email) {
		return customerRepository.getemail(email);
	}
	public List<Customer> getDetailsUsingPan(String pan_number) {
		return customerRepository.getpan(pan_number);
	}
	public List<Customer> getDetailsUsingContact(int contact_number) {
		return customerRepository.getcontact(contact_number);
	}
	

}
