package com.ihub.www.serviceimpletation;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.ihub.www.dto.CustomerSignupdto;

public interface CustomerSignupServiceImpletation {

	
	
	public ResponseEntity<List<CustomerSignupdto>> getalldata();
	 public ResponseEntity<CustomerSignupdto> getbyid(Long id  );
	 public ResponseEntity<String> postthedata(CustomerSignupdto customerSipdto);
	 public  ResponseEntity<String> deletethedata(long id);
	 public ResponseEntity<CustomerSignupdto> getmobileonly( String mobile);
	 public ResponseEntity<String> checkPassword(CustomerSignupdto customerSipDto);
		

	
}
