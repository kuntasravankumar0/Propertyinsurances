package com.ihub.www.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class CustomerSignupdto {

   
    private long id;

    
    private String customerId;

    @NotBlank
    @Column(unique=true,nullable=false)
    @Pattern(regexp = "^[6-9][0-9]{9}$", message = "Enter a valid mobile number (10 digits)")
    private String mobileNo;

    @NotBlank
    @Pattern(regexp = "^[a-zA-Z\\s'-]+$\r\n", message = "Enter a valid name (alphabets and spaces only)")
    private String person;

    @NotBlank
    @Email(message = "Enter a valid email")
    @Pattern(regexp = "^[a-zA-Z0-9._%+-&]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\r\n", message = "Enter a valid email")
    private String email;

    
    private String paymentId;

    // Getters and Setters

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

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
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
        return paymentId;
    }

    public void setPaymentId(String paymentId) {
        this.paymentId = paymentId;
    }

    // Constructors

    public CustomerSignupdto(long id, String customerId, String mobileNo, String person, String email, String paymentId) {
        this.id = id;
        this.customerId = customerId;
        this.mobileNo = mobileNo;
        this.person = person;
        this.email = email;
        this.paymentId = paymentId;
    }

    public CustomerSignupdto() {
        // Default constructor
    }
}
