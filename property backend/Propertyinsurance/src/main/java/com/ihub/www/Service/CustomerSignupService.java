package com.ihub.www.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ihub.www.Repo.CustomerSignupRepo;
import com.ihub.www.dto.CustomerSignupdto;
import com.ihub.www.exception.PropertyduplicateException;
import com.ihub.www.exception.Resourcenotfound;
import com.ihub.www.model.CustomerSignupModel;
import com.ihub.www.serviceimpletation.CustomerSignupServiceImpletation;

@Service
public class CustomerSignupService  implements CustomerSignupServiceImpletation {

	 @Autowired
	 CustomerSignupRepo customerSignupRepo;
	
	@Autowired
	ModelMapper modelMapper;

	
	public ResponseEntity<List<CustomerSignupdto>> getalldata()
	{
		List<CustomerSignupModel> model=customerSignupRepo.findAll();
		if(model.isEmpty())
		{
			 throw new Resourcenotfound("No data found");
        }
		List<CustomerSignupdto> dto=model.stream().map(model1 ->modelMapper.map(model1,CustomerSignupdto.class))
		.collect(Collectors.toList());
		 return ResponseEntity.ok(dto); 
	}
	
	
	
	 public ResponseEntity<CustomerSignupdto> getbyid(Long id  )
	 {
		 Optional<CustomerSignupModel> modelid=customerSignupRepo.findById(id);
		 if(modelid.isEmpty())
		 {
			 throw new Resourcenotfound(" not found");
		 }
		 
		 CustomerSignupdto dto=modelMapper.map(modelid,CustomerSignupdto.class);
		 return ResponseEntity.status(HttpStatus.OK).body(dto);
    }
	 
	 
	 public ResponseEntity<String> postthedata(CustomerSignupdto customerSipdto) { 
		    String mobileno = customerSipdto.getMobileNo();
		    String email = customerSipdto.getEmail();
		    String customerId = customerSipdto.getCustomerId();
		    System.out.println("Mobile No: " + mobileno);
		    System.out.println("Email: " + email);
		    System.out.println("Customer ID: " + customerId);
//		    System.out.println("person ID: " +  );
		    
		    Optional<CustomerSignupModel> model = customerSignupRepo.findByMobilenoOrEmailOrCustomerId(mobileno, email,customerId);
		    if (model.isPresent()) {
		        throw new PropertyduplicateException("Data already present with the provided mobile number or email.");
		    } else {
		        CustomerSignupModel customeri = modelMapper.map(customerSipdto, CustomerSignupModel.class);
		        customerSignupRepo.save(customeri);
		        return ResponseEntity.status(HttpStatus.CREATED).body("Customer signed up successfully");
		    }
		}
	 
	
	 public ResponseEntity<String> checkPassword(CustomerSignupdto customerSipDto) {
	     String mobileno = customerSipDto.getMobileNo();
	     String email = customerSipDto.getEmail();
	     System.out.println("Mobile No: " + mobileno);
	     System.out.println("Email: " + email);
	     
	     // Find customer by mobile number or email
	     Optional<CustomerSignupModel> model = customerSignupRepo.findByMobilenoOrEmail(mobileno, email);
	     
	     // If data is present, throw exception
	     if (model.isPresent()) {
	         throw new PropertyduplicateException("Data already present with the provided mobile number or email.");
	     } else {
	         return new ResponseEntity<>("Data is valid", HttpStatus.OK);
	     }
	 }

		
	
	 
	 public  ResponseEntity<String> deletethedata(long id)
	 {
		 customerSignupRepo.deleteById(id);
		 return ResponseEntity.status(HttpStatus.CONFLICT).body("customer data was deleted");
	 }
	 
	 
	 
	 
	 public ResponseEntity<String> updatethedata(CustomerSignupdto customerSipdto,long id)
	 {
		 
		 Optional<CustomerSignupModel> modelid=customerSignupRepo.findById(id);
		 
		 if(modelid.isEmpty())
		 {
			 throw new Resourcenotfound(" not found");
		 }
		 
		 CustomerSignupModel dto1=modelid.get();
		 dto1.setName(customerSipdto.getName());
		 dto1.setEmail(customerSipdto.getEmail());
		 dto1.setMobileno(customerSipdto.getMobileNo());
		 
		 customerSignupRepo.save(dto1);
		 return ResponseEntity.status(HttpStatus.OK).body("hj");
	 }
	 
	 
	 
	 

	 
	 public ResponseEntity<CustomerSignupdto> getmobileonly(  String mobile)
		{
		 Optional<CustomerSignupModel> model=customerSignupRepo.findByMobileno( mobile);
		 if (model.isEmpty())
		 {
			 throw  new Resourcenotfound("not data founded with mobile ");
		 }
		 CustomerSignupdto dto=modelMapper.map(model,CustomerSignupdto.class);
		 return ResponseEntity.status(HttpStatus.OK).body(dto);
		}
	 
}

	
	
		
	    


