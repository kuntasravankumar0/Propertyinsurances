package com.ihub.www.Repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ihub.www.model.Payment;

@Repository
public interface PaymentRepo extends JpaRepository<Payment,Long> {
	
	Optional<Payment> findBypaymentIdAndCustomerId( String paymentId,String customerId);
	
	//Optional<Payment> findByCustomerId(String customerId);
	Optional<Payment> findByMobileNo( String mobileNo);

	
	@Query("SELECT p FROM Payment p WHERE p.customerId = :customerId")
	List<Payment> findByCustomerId(@Param("customerId") String customerId);

}
