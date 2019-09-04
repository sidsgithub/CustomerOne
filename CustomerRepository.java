package com.example.CustomerOneWeb.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.CustomerOneWeb.model.Customer;


@Repository
public interface CustomerRepository extends JpaRepository<Customer,Integer> {
	@Query("select c from Customer c where customername =:customername order by customername ")
	List<Customer> getname(@Param("customername") String customername);

	@Query("select c from Customer c where customerid =:customerid order by customername ")
	List<Customer> getid(@Param("customerid") int customerid);
	
	@Query("select c from Customer c where dob =:dob order by customername ")
	List<Customer> getdob(@Param("dob") String dob);

	@Query("select c from Customer c where email =:email order by customername ")
	List<Customer> getemail(@Param("email") String email);
	
	@Query("select c from Customer c where pan_number =:pan_number order by customername ")
	List<Customer> getpan(@Param("pan_number") String pan_number);
	
	@Query("select c from Customer c where contact_number =:contact_number order by customername ")
	List<Customer> getcontact(@Param("contact_number") int contact_number);

}
