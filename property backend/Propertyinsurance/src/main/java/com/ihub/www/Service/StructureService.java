package com.ihub.www.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ihub.www.Repo.StructureRepo;
import com.ihub.www.dto.StructureDto;
import com.ihub.www.exception.PropertyduplicateException;
import com.ihub.www.exception.Resourcenotfound;
import com.ihub.www.model.StructureModel;
import com.ihub.www.serviceimpletation.StructureServiceImpletation;

@Service
public class StructureService implements StructureServiceImpletation{
	
	
	@Autowired
	StructureRepo repo;
	
	@Autowired
	ModelMapper modelMapper;
	

		public ResponseEntity<List<StructureDto>> getalldata()
		{
		List<StructureModel> model=repo.findAll();
		if(model.isEmpty())
		{
			 throw new Resourcenotfound("No data found");
        }
		 	List<StructureDto> dto = model.stream()
				 .map(model1 ->modelMapper.map(model1,StructureDto.class))
				 .collect(Collectors.toList());
		 	return ResponseEntity.status(HttpStatus.OK).body(dto);
		}
	

	

		public ResponseEntity<StructureDto> getbyid(long id)
		{
		Optional<StructureModel> modelid=repo.findById(id);
		if(modelid.isEmpty())
	    {
			 throw new Resourcenotfound(" not found");
	    }
		 StructureDto dto=modelMapper.map(modelid,StructureDto.class);
		 return ResponseEntity.status(HttpStatus.OK).body(dto);
	 	}
	 

		
	 	public  ResponseEntity<String> deletethedata(long id)
	 	{
	 			repo.deleteById(id);
		 return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Data deleted successfully");
	 	}
	 
	 	
	 	
	 	
	 
	 	public ResponseEntity<String> postthedata(StructureDto structureDto)
		{
	 		String customerId=structureDto.getCustomerId();
	 		String paymentId=structureDto.getPaymentId();
	 		Optional<StructureModel> model= repo.findByCustomerIdOrPaymentId(customerId, paymentId);
	 		if(model.isPresent())
	 		{
	 			throw new  PropertyduplicateException("data is allready prasent");
	 		}
	 		
	 		StructureModel model1 =modelMapper.map(structureDto,StructureModel.class);
	 		repo.save(model1);
	 		return ResponseEntity.status(HttpStatus.CREATED).body("Data created successfully");
		}
	 	
	 	

		 public ResponseEntity<String> updatethedata(StructureDto structureDto,long id)
		 {
			 
			 Optional<StructureModel> modelid=repo.findById(id);
			 
			 if(modelid.isEmpty())
			 {
				 throw new Resourcenotfound(" not found");
			 }
	
			 StructureModel model=modelid.get();
			 model.setMarketValue(structureDto.getMarketValue());
			 model.setSquareFeet(structureDto.getSquareFeet());
			 model.setPincode(structureDto.getPincode());
			 model.setBuildingAge(structureDto.getBuildingAge());
			 model.setPerson(structureDto.getPerson());
			 model.setSecurity(structureDto.getSecurity());
			 repo.save(model);
			 return ResponseEntity.status(HttpStatus.CONFLICT).body(" ok");
		 	}
		 
		 
		 
		 
           public ResponseEntity<StructureDto> getcustomerId(  String customerId)
		   {
	          Optional<StructureModel> model=repo.findByCustomerId( customerId);
			    if (model.isEmpty())
			 	 {
		     	  throw  new Resourcenotfound("not data ");
	      	     }
			 	StructureDto dto=modelMapper.map(model,StructureDto.class);
			 return ResponseEntity.status(HttpStatus.OK).body(dto);
			}
		 
		 
		 

		 
		 
		 
		 
		 
		 
		 
		 
}