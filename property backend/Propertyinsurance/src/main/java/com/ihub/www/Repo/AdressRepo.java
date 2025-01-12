package com.ihub.www.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ihub.www.model.Adressmodel;


@Repository
public interface AdressRepo extends JpaRepository<Adressmodel,Long> {
	
	Optional<Adressmodel> findByCustomerId(String customerId);
}
