package com.ihub.www.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;


public class Quotationdto {

	
	
	
	private Long id;
	
	
	@Pattern(regexp = "/^[1-9][0-9]{5,}$/", message="start with a digit between 1 and 9 enter only 5 digits")
	private String marketValue;

	
	@NotBlank()
	private String squareFeet;

	
	@Pattern(regexp = "/^[1-9]{1}[0-9]{5}$/",message="please enter 6 digit")
	private int pincode;

	
	@NotBlank(message="enter the year ")
	private String year;


	@NotBlank(message="it is a name")
	private String premium;
	
	
	
	
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
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

	
	
	
	public Quotationdto(Long id, String marketValue, String squareFeet, int pincode, String year, String premium) {
		super();
		this.id = id;
		this.marketValue = marketValue;
		this.squareFeet = squareFeet;
		this.pincode = pincode;
		this.year = year;
		this.premium = premium;
	}
	
	
	
	

	public Quotationdto() {
		super();
		// TODO Auto-generated constructor stub
	}
}
