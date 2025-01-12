package com.ihub.www.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class QuotationModel {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;
	
	@Column
	private String marketValue;

	@Column
	private String squareFeet;

	@Column
	private int pincode;

	@Column
	private String year;

	@Column
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

	
	
	
	public QuotationModel(Long id, String marketValue, String squareFeet, int pincode, String year, String premium) {
		super();
		this.id = id;
		this.marketValue = marketValue;
		this.squareFeet = squareFeet;
		this.pincode = pincode;
		this.year = year;
		this.premium = premium;
	}
	
	
	
	

	public QuotationModel() {
		super();
		// TODO Auto-generated constructor stub
	}
}
