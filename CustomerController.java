package com.example.CustomerOneWeb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.CustomerOneWeb.model.Customer;
import com.example.CustomerOneWeb.service.CustomerService;

@RestController
@RequestMapping(value = "/customer")
@CrossOrigin(origins="http://localhost:4200/")
public class CustomerController {
	@Autowired
	CustomerService customerService;
	
	@ResponseBody
	@RequestMapping(value = "/list")
	public List<Customer> getData() {
		return customerService.getAll(); 
	}
	
	@ResponseBody
	@RequestMapping(value = "/add")
	public List<Customer> saveData(@RequestBody Customer customer){
		customerService.saveCustomer(customer);
		return customerService.getAll();
	}
	
	@ResponseBody
	@RequestMapping(value = "/findname")
	public List<Customer> getName(@RequestBody Customer customer){
		return customerService.getDetailsUsingName(customer.getCustomername());
	}
	
	@ResponseBody
	@RequestMapping(value = "/findid")
	public List<Customer> getId(@RequestBody Customer customer){
		return customerService.getDetailsUsingId(customer.getCustomerid());
	}
	
	@ResponseBody
	@RequestMapping(value = "/finddob")
	public List<Customer> getDob(@RequestBody Customer customer){
		return customerService.getDetailsUsingDob(customer.getDob());
	}
	
	@ResponseBody
	@RequestMapping(value = "/findemail")
	public List<Customer> getEmail(@RequestBody Customer customer){
		return customerService.getDetailsUsingEmail(customer.getEmail());
	}
	
	@ResponseBody
	@RequestMapping(value = "/findpan")
	public List<Customer> getPan(@RequestBody Customer customer){
		return customerService.getDetailsUsingPan(customer.getPan_number());
	}
	
	@ResponseBody
	@RequestMapping(value = "/findcontact")
	public List<Customer> getContact(@RequestBody Customer customer){
		return customerService.getDetailsUsingContact(customer.getContact_number());
	}

}
