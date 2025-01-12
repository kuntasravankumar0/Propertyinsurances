package com.ihub.www.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ihub.www.model.CustomerSignupModel;

@Repository
public interface CustomerSignupRepo extends JpaRepository<CustomerSignupModel,Long> {

	

	Optional<CustomerSignupModel> findByMobilenoOrEmail(String mobileno, String email);
	
	Optional<CustomerSignupModel> findByMobileno(String mobileno);
	// @Query ("select mobile from CustomerModel");
	Optional<CustomerSignupModel> findByCustomerId( String customerId);
	Optional<CustomerSignupModel> findByMobilenoOrEmailOrCustomerId(String mobileno,String email,String customerId);
	
 
	
	

}
