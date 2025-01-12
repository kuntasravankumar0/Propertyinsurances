package com.ihub.www.serviceimpletation;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.ihub.www.dto.AdressDro;

public interface Addressimp {

	 public ResponseEntity<String> postTheData(AdressDro Address  );
	 public ResponseEntity<AdressDro> getbycustomerid(String customerId);
	 public ResponseEntity<List<AdressDro>> getalldata();
	 public ResponseEntity<AdressDro> updateadress(String customerId, AdressDro updatedAddress);
	 }
