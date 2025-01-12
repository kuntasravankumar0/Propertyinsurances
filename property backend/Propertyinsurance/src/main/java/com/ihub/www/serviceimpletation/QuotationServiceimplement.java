package com.ihub.www.serviceimpletation;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.ihub.www.dto.Quotationdto;

public interface QuotationServiceimplement 
{
	
	public ResponseEntity<List<Quotationdto>> getalldata();
	public ResponseEntity<String> postthedata(Quotationdto quotationdto);

}
