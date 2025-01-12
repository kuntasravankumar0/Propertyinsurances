package com.ihub.www.serviceimpletation;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.ihub.www.dto.PaymentDto;
import com.ihub.www.model.Payment;

public interface PaymentServiceimpl {
	
		public ResponseEntity<List<PaymentDto>> getalldata();
	    public ResponseEntity<PaymentDto> getbymobile(String mobileno);
	    public ResponseEntity<Payment> postdata( PaymentDto paymentDto);
	    public ResponseEntity<List<PaymentDto>> getcustomerId(String customerId);
}