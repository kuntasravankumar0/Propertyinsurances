package com.ihub.www.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ihub.www.model.QuotationModel;

@Repository
public interface QuotationRepo extends JpaRepository<QuotationModel,Long>{

	
	
}
