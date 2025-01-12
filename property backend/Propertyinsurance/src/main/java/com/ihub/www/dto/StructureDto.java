package com.ihub.www.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;


public class StructureDto {

	
	
	private long id;
	
	
	@Column
	@Pattern(regexp = "^[0-9][0-9]{5,}$", message="start with a digit between 1 and 9 enter only 5 digits")
	private String marketValue;	
	
	@Column
	@NotBlank
	private String squareFeet;

	
	@Column
	@Pattern(regexp = "^[1-9]{1}[0-9]{5}$", message = "please enter 6 digits")
	private int pincode;

	@Column
	@NotBlank(message="please enter buildingAge up to now")
	private String buildingAge;

	@Column
	@NotBlank
	private String effected;

	@Column
	@NotBlank
	private String security;

	@Column
	@Pattern(regexp = "^[A-Z][a-z]+(?: [A-Z][a-z]+)?$", message="enter your name")
	private String person;

	
	private String customerId;

	@Column
	private String paymentId;
	
	
	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public String getBuildingAge() {
		return buildingAge;
	}

	public void setBuildingAge(String buildingAge) {
		this.buildingAge = buildingAge;
	}

	public String getEffected() {
		return effected;
	}

	public void setEffected(String effected) {
		this.effected = effected;
	}

	public String getSecurity() {
		return security;
	}

	public void setSecurity(String security) {
		this.security = security;
	}

	public String getPerson() {
		return person;
	}

	public void setPerson(String person) {
		this.person = person;
	}

	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}

	public String getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}
	
	
	
	

	public StructureDto(long id, String marketValue, String squareFeet, int pincode, String buildingAge, String effected,
			String security, String person, String customerId, String paymentId) {
		super();
		this.id = id;
		this.marketValue = marketValue;
		this.squareFeet = squareFeet;
		this.pincode = pincode;
		this.buildingAge = buildingAge;
		this.effected = effected;
		this.security = security;
		this.person = person;
		this.customerId = customerId;
		this.paymentId = paymentId;
	}

	
	
	public StructureDto() {
		super();
		// TODO Auto-generated constructor stub
	}
}
