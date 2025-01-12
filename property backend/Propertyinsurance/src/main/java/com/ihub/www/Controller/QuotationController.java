package com.ihub.www.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ihub.www.dto.Quotationdto;
import com.ihub.www.serviceimpletation.QuotationServiceimplement;

@RestController
@RequestMapping("/Quotation")
@CrossOrigin(origins="*")
public class QuotationController {

	
	@Autowired 
	QuotationServiceimplement quotation;
	
	
	@GetMapping("/getall")
	public ResponseEntity<List<Quotationdto>> getalldata()
	{
	    return	quotation.getalldata();
	}
	
	
	@PostMapping("/post")
	public ResponseEntity<String> postthedata(@RequestBody Quotationdto quotationdto )
	{
		 return	quotation.postthedata(quotationdto);
		
	}
	
	
	
	
}
