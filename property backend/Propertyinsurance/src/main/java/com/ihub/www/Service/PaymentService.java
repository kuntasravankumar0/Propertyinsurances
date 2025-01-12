package com.ihub.www.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ihub.www.Repo.PaymentRepo;
import com.ihub.www.dto.PaymentDto;
import com.ihub.www.exception.PropertyduplicateException;
import com.ihub.www.exception.Resourcenotfound;
import com.ihub.www.model.Payment;
import com.ihub.www.serviceimpletation.PaymentServiceimpl;


@Service
public class PaymentService  implements PaymentServiceimpl{

	@Autowired
	PaymentRepo repo;
	
	@Autowired
	ModelMapper modelMapper;
	

	public ResponseEntity<List<PaymentDto>> getalldata()
	{
		List<Payment> model=repo.findAll();
		if(model.isEmpty())
		{
			 throw new Resourcenotfound("No data found");
        }
		List<PaymentDto> dto=model.stream().map(model1 ->modelMapper.map(model1,PaymentDto.class))
		.collect(Collectors.toList());
		 return ResponseEntity.ok(dto); 
	}
	

	public ResponseEntity<List<PaymentDto>> getcustomerId(String customerId) {
	    List<Payment> model = repo.findByCustomerId(customerId);
	    
	    if (model.isEmpty()) {
	        throw new Resourcenotfound("Data not found for the provided customerId.");
	    }

	    List<PaymentDto> dto = model.stream()
	            .map(payment -> modelMapper.map(payment, PaymentDto.class))
	            .collect(Collectors.toList());
	    return ResponseEntity.ok(dto); 
	}

	 
	 

	
	public ResponseEntity<PaymentDto> getbymobile(String mobileNo)
	 {
		Optional<Payment> modelid = repo.findByMobileNo(mobileNo);
	    if (modelid.isEmpty()) {
	        throw new Resourcenotfound("Not found");
	    }

	    PaymentDto dto = modelMapper.map(modelid.get(), PaymentDto.class); 
	    return ResponseEntity.status(HttpStatus.OK).body(dto);
    }
	
	
	 
	 
	 
	 public ResponseEntity<Payment> postdata( PaymentDto paymentDto)
	 {
		String paymentId=paymentDto.getPaymentId();
		String customerId=paymentDto.getCustomerId();
		Optional<Payment> model=repo.findBypaymentIdAndCustomerId(paymentId,customerId);
		if(model.isPresent())
		{
			throw new  PropertyduplicateException("data is all ready pracent");
		}
		 Payment pay=modelMapper.map(paymentDto,Payment.class);
		 repo.save(pay);
		 return ResponseEntity.status(HttpStatus.OK).body(pay);
	 }
	 
	
	 
	 
	
	 
	 
}
