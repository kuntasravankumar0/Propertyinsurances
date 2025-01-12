package com.ihub.www.dto;

import jakarta.validation.constraints.NotBlank;

public class PaymentDto {


	
	private Long id;
	
	@NotBlank
	private String paymentId;
	
	private String customerId;
	
	
	
	
	
	private String buildingAge;
	
	
	private String marketValue;

	
	private String squareFeet;

	
	private int pincode;
	
	
	
	
	
	@NotBlank
	private String year;
	
	@NotBlank
	private String premium;
	
	private String mobileNo;

	
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

	
	
	public PaymentDto() {
		super();
		// TODO Auto-generated constructor stub
	}

}


