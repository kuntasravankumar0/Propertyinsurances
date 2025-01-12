package com.ihub.www.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Payment {


	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;
	
	@Column
	private String paymentId;
	@Column
	private String customerId;
	@Column
	private String year;
	@Column
	private String premium;
	
	@Column
	private String mobileNo;
	

	private String buildingAge;
	
	
	private String marketValue;

	
	private String squareFeet;
	private int pincode;
	

	
	public String getBuildingAge() {
		return buildingAge;
	}



	public void setBuildingAge(String buildingAge) {
		this.buildingAge = buildingAge;
	}



	public String getMarketValue() {
		return marketValue;
	}



	public void setMarketValue(String marketValue) {
		this.marketValue = marketValue;
	}



	public String getSquareFeet() {
		return squareFeet;
	}



	public void setSquareFeet(String squareFeet) {
		this.squareFeet = squareFeet;
	}



	public int getPincode() {
		return pincode;
	}



	public void setPincode(int pincode) {
		this.pincode = pincode;
	}



	
	
	
	
	
	public String getMobileNo() {
		return mobileNo;
	}



	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getPaymentId() {
		return paymentId;
	}



	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}



	public String getCustomerId() {
		return customerId;
	}


	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}



	public String getYear() {
		return year;
	}



	public void setYear(String year) {
		this.year = year;
	}



	public String getPremium() {
		return premium;
	}



	public void setPremium(String premium) {
		this.premium = premium;
	}




	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Payment(Long id, String paymentId, String customerId, String year, String premium, String mobileNo,
			String buildingAge, String marketValue, String squareFeet, int pincode) {
		super();
		this.id = id;
		this.paymentId = paymentId;
		this.customerId = customerId;
		this.year = year;
		this.premium = premium;
		this.mobileNo = mobileNo;
		this.buildingAge = buildingAge;
		this.marketValue = marketValue;
		this.squareFeet = squareFeet;
		this.pincode = pincode;
	}

}
