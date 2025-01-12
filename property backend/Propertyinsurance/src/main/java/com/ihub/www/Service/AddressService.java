package com.ihub.www.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ihub.www.Repo.AdressRepo;
import com.ihub.www.dto.AdressDro;
import com.ihub.www.exception.Resourcenotfound;
import com.ihub.www.model.Adressmodel;
import com.ihub.www.serviceimpletation.Addressimp;

@Service
public class AddressService implements Addressimp {

	
	@Autowired
	AdressRepo repo;
	
	@Autowired
	ModelMapper modelMapper;
	

	public ResponseEntity<String> postTheData(AdressDro address) { 
    String customerId = address.getCustomerId();  
	    Optional<Adressmodel> existingModel = repo.findByCustomerId(customerId);
		
	    if (existingModel.isPresent()) {
	        throw new Resourcenotfound("Data already present with the provided mobile number.");
	    } else {
	    	Adressmodel newAddress = modelMapper.map(address, Adressmodel.class);
	        repo.save(newAddress);
	        
	        return ResponseEntity.status(HttpStatus.CREATED).body("Address posted successfully.");
	    }
	}

	
	
	public ResponseEntity<AdressDro> updateadress(String customerId, AdressDro updatedAddress) {
	    // Retrieve existing address by customerId
	    Optional<Adressmodel> existingAddress = repo.findByCustomerId(customerId);
	    
	    // Check if the address exists
	    if (!existingAddress.isPresent()) {
	        throw new Resourcenotfound("No address found for the provided customerId.");
	    } else {
	        // Get the address to update
	        Adressmodel addressToUpdate = existingAddress.get();
	        
	        // Update fields of the address
	        addressToUpdate.setHouseno(updatedAddress.getHouseno());
	        addressToUpdate.setStreet(updatedAddress.getStreet());
	        addressToUpdate.setCity(updatedAddress.getCity());
	        addressToUpdate.setState(updatedAddress.getState());
	        addressToUpdate.setHouseno2(updatedAddress.getHouseno2());
	        addressToUpdate.setStreet2(updatedAddress.getStreet2());
	        addressToUpdate.setCity2(updatedAddress.getCity2());
	        addressToUpdate.setState2(updatedAddress.getState2());

	        // Save the updated address entity
	        Adressmodel savedAddress = repo.save(addressToUpdate);

	        // Map the saved entity to the AddressDro DTO
	        AdressDro savedAddressDro = modelMapper.map(savedAddress, AdressDro.class);

	        // Return the saved AddressDro in the response
	        return ResponseEntity.ok(savedAddressDro);
	    }
	}

	

	public ResponseEntity<List<AdressDro>> getalldata()
	{
		List<Adressmodel> model=repo.findAll();
		if(model.isEmpty())
		{
			 throw new Resourcenotfound("No data found");
        }
		List<AdressDro> dto=model.stream().map(model1 ->modelMapper.map(model1,AdressDro.class))
		.collect(Collectors.toList());
		 return ResponseEntity.ok(dto); 
	}
	
	
	public ResponseEntity<AdressDro> getbycustomerid(String customerId) {
	    Optional<Adressmodel> id = repo.findByCustomerId(customerId);
	    if (id.isEmpty()) {
	        throw new Resourcenotfound("Customer address not found for customerId: " + customerId);
	    }
	    AdressDro dto = modelMapper.map(id.get(), AdressDro.class);
	    return ResponseEntity.status(HttpStatus.OK).body(dto);
	}
	
	
	

}
