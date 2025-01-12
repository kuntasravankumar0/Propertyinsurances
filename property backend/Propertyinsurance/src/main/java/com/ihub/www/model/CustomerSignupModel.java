package com.ihub.www.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class CustomerSignupModel {
	
		@Id
		@GeneratedValue(strategy = GenerationType.SEQUENCE)
		private long id;
		
		@Column
		private String customerId;
		
		@Column
		private String mobileno;
		
		@Column
		private String person;
		
		@Column
		private String email;
		
		@Column
		private String PaymentId;
		
	


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}

	public String getMobileno() {
		return mobileno;
	}

	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}

	public String getName() {
		return person;
	}

	public void setName(String person) {
		this.person = person;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPaymentId() {
		return PaymentId;
	}

	public void setPaymentId(String paymentId) {
		PaymentId = paymentId;
	}

	
	
	public CustomerSignupModel(long id, String customerId, String mobileno, String person, String email,
			String paymentId) {
		super();
		this.id = id;
		this.customerId = customerId;
		this.mobileno = mobileno;
		this.person = person;
		this.email = email;
		PaymentId = paymentId;
	}

	
	
	public CustomerSignupModel() {
		super();
		// TODO Auto-generated constructor stub
	}
}
