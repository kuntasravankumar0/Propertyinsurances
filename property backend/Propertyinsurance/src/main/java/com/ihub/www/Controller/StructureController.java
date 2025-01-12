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

import com.ihub.www.dto.StructureDto;
import com.ihub.www.serviceimpletation.StructureServiceImpletation;

@RestController
@RequestMapping("/structure")
@CrossOrigin(origins="*")
public class StructureController
{

	@Autowired
	StructureServiceImpletation Structure;
	
	
	//http://localhost:9090/structure/post

	@PostMapping("/post")
	public ResponseEntity<String> postthedata(@RequestBody StructureDto structureDto)
	{
		return Structure.postthedata(structureDto);
	}
	
	
	@GetMapping("/getall")
	public ResponseEntity<List<StructureDto>> getalldata()
	{
		return Structure.getalldata();
	}
	
	
	 @GetMapping("/get")
	 public ResponseEntity<StructureDto> getbyid(@PathVariable long id)
	 {
		return Structure.getbyid(id);
	 }
	 
	 
	 @DeleteMapping("/delete")
	 public  ResponseEntity<String> deletethedata(@PathVariable long id)
	 {
		 return Structure.deletethedata(id);
	 }
	 
	 
	 @GetMapping("/get/{customerId}")
	 public ResponseEntity<StructureDto> getcustomerId( @PathVariable String customerId)
	 {
		 return Structure.getcustomerId(customerId);
	 }
	 
	 
}
