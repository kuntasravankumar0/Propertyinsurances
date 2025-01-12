package com.ihub.www.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ihub.www.dto.PaymentDto;
import com.ihub.www.model.Payment;
import com.ihub.www.serviceimpletation.PaymentServiceimpl;



@RestController
@RequestMapping("/Payment")
@CrossOrigin(origins="*")
public class PaymentController {

	
	@Autowired
	PaymentServiceimpl psi;
	

	@GetMapping("/getall")
	public ResponseEntity<List<PaymentDto>> getalldata()
	{
		return psi.getalldata();
	}
	
	@GetMapping("/getbymobile/{mobileNo}")
	 public ResponseEntity<PaymentDto> getbymobile(@PathVariable String mobileNo )
	 {
		 return psi.getbymobile(mobileNo);
	 }
	
	
	 @PostMapping("/post")
	 public ResponseEntity<Payment> postdata(@RequestBody PaymentDto paymentDto)
	 {
		 return psi.postdata(paymentDto);
	 }
	
	 
	 	@GetMapping("/getbycustomer/{customerId}")
	 	public ResponseEntity<List<PaymentDto>> getcustomerId(@PathVariable String customerId) 
	 	{
	     return psi.getcustomerId(customerId);
	 	}
	 	

	 	
	 	
	 	
	 	

	
	 	
	 	
}
