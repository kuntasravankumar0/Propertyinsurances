package com.ihub.www.serviceimpletation;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.ihub.www.dto.StructureDto;

public interface StructureServiceImpletation 
{
	public ResponseEntity<List<StructureDto>> getalldata();
	public ResponseEntity<StructureDto> getbyid(long id);
	public  ResponseEntity<String> deletethedata(long id);
	public ResponseEntity<String> postthedata( StructureDto structureDto);
	public ResponseEntity<String> updatethedata(StructureDto structureDto,long id);
	 public ResponseEntity<StructureDto> getcustomerId(  String customerId);
	
}