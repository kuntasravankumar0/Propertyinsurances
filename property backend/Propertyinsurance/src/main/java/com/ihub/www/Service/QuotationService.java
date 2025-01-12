package com.ihub.www.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ihub.www.Repo.QuotationRepo;
import com.ihub.www.dto.Quotationdto;
import com.ihub.www.exception.Resourcenotfound;
import com.ihub.www.model.QuotationModel;
import com.ihub.www.serviceimpletation.QuotationServiceimplement;

@Service
public class  QuotationService  implements QuotationServiceimplement {

	
	@Autowired
	QuotationRepo quotationRepo;
    
	@Autowired
	ModelMapper modelMapper;
	
	
	


	public ResponseEntity<List<Quotationdto>> getalldata()
	{
	List<QuotationModel> model=quotationRepo.findAll();
	if(model.isEmpty())
	{
		 throw new Resourcenotfound("No data found");
    }
	 	List<Quotationdto> dto = model.stream()
			 .map(model1 ->modelMapper.map(model1,Quotationdto.class))
			 .collect(Collectors.toList());
	 	return ResponseEntity.status(HttpStatus.OK).body(dto);
	}

	
	

 	public ResponseEntity<String> postthedata(Quotationdto quotationdto)
	{
 		
 		QuotationModel model1 =modelMapper.map(quotationdto,QuotationModel.class);
 		quotationRepo.save(model1);
 		
 		return ResponseEntity.status(HttpStatus.CREATED).body("Data created successfully");
	}

	
 	
	
	
	
}
