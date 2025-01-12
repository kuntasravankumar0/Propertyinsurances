package com.ihub.www.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ihub.www.dto.CustomerSignupdto;
import com.ihub.www.serviceimpletation.CustomerSignupServiceImpletation;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins="*")
public class CustomerSignupController {
	
	
	
	@Autowired
	CustomerSignupServiceImpletation custpmersignup;
	
	
		@PostMapping("/add")
		public ResponseEntity<String> postthedata(@RequestBody CustomerSignupdto customerSipdto)
		{
		 	return custpmersignup.postthedata(customerSipdto);
		}
		
		
		@PostMapping("/check")
		public ResponseEntity<String> checkpassword(@RequestBody CustomerSignupdto customerSipdto)
		{
		 	return custpmersignup.checkPassword(customerSipdto);
		}
	
		
		
		//http://localhost:9090/customer/getall
		@GetMapping("/getall")
		public ResponseEntity<List<CustomerSignupdto>> getalldata()
		{
		return custpmersignup.getalldata();
		}
	 
	
		@GetMapping("/get/{id}")
		public ResponseEntity<CustomerSignupdto> getbyid(@PathVariable long id  )
		{
		return custpmersignup.getbyid(id);
		}
	
	
		@DeleteMapping("/delete/{id}")
		public  ResponseEntity<String> deletethedata(@PathVariable long id)
		{
			return custpmersignup.deletethedata(id);
				
		}
		
		
		@GetMapping("/mobile/{mobile}")
		public ResponseEntity<CustomerSignupdto> getmobileonly(@PathVariable String mobile )
		{
		 	return custpmersignup.getmobileonly(mobile);
		}

}