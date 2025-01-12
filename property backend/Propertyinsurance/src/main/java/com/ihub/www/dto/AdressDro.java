package com.ihub.www.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Id;





public class AdressDro {

	
		@Id
		private Long id;
		@Column
		private String panCard;
		@Column
		 private String customerId;
		@Column
		private String houseno;
		@Column
		private String street;
		@Column
		private String city;
		@Column
		private String state;
		@Column
		private String houseno2;
		@Column
		private String street2;
		@Column
		private String city2;
		@Column
		private String state2;
		
		
		
		
		public AdressDro(Long id, String panCard, String customerId, String houseno, String street, String city,
				String state, String houseno2, String street2, String city2, String state2) {
			super();
			this.id = id;
			this.panCard = panCard;
			this.customerId = customerId;
			this.houseno = houseno;
			this.street = street;
			this.city = city;
			this.state = state;
			this.houseno2 = houseno2;
			this.street2 = street2;
			this.city2 = city2;
			this.state2 = state2;
		}




		public AdressDro() {
			super();
			// TODO Auto-generated constructor stub
		}




		public Long getId() {
			return id;
		}




		public void setId(Long id) {
			this.id = id;
		}




		public String getPanCard() {
			return panCard;
		}




		public void setPanCard(String panCard) {
			this.panCard = panCard;
		}




		public String getCustomerId() {
			return customerId;
		}




		public void setCustomerId(String customerId) {
			this.customerId = customerId;
		}




		public String getHouseno() {
			return houseno;
		}




		public void setHouseno(String houseno) {
			this.houseno = houseno;
		}




		public String getStreet() {
			return street;
		}




		public void setStreet(String street) {
			this.street = street;
		}




		public String getCity() {
			return city;
		}




		public void setCity(String city) {
			this.city = city;
		}




		public String getState() {
			return state;
		}




		public void setState(String state) {
			this.state = state;
		}




		public String getHouseno2() {
			return houseno2;
		}




		public void setHouseno2(String houseno2) {
			this.houseno2 = houseno2;
		}




		public String getStreet2() {
			return street2;
		}




		public void setStreet2(String street2) {
			this.street2 = street2;
		}




		public String getCity2() {
			return city2;
		}




		public void setCity2(String city2) {
			this.city2 = city2;
		}




		public String getState2() {
			return state2;
		}




		public void setState2(String state2) {
			this.state2 = state2;
		}
		
}