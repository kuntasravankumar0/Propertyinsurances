package com.ihub.www.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ihub.www.dto.AdressDro;
import com.ihub.www.serviceimpletation.Addressimp;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/Address")
public class AdressController {
	
	//http:localhost:9090/Address/post
	
  @Autowired
  Addressimp imps;
	
  	@PostMapping("/post")
  	public ResponseEntity<String> postTheData( @RequestBody AdressDro address   )
	 {
	  System.out.println("Received address data: " + address);
		 return imps.postTheData(address);
	 }
	

  		@GetMapping("/get/{customerId}")
      public ResponseEntity<AdressDro> getbycustomerid( @PathVariable String customerId  )
 	 {
		 return imps.getbycustomerid(customerId);
	 }
  		
  		@PutMapping("/update/{customerId}")
        public ResponseEntity<AdressDro> updateadress( @PathVariable String customerId,@RequestBody AdressDro updatedAddress)
   	 {
  		 return imps.updateadress(customerId,updatedAddress);
			}
  
  
  		@GetMapping("/getall")
  		public ResponseEntity<List<AdressDro>> getalldata()
  		{
  			 return imps.getalldata();
  		 }
  
	
}
