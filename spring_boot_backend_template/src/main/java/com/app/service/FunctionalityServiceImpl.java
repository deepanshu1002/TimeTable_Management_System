package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.FunctionalityTbl;
import com.app.repository.FunctionalityRepository;


@Service
@Transactional
public class FunctionalityServiceImpl implements FunctionalityService{
	
	
	@Autowired
	private FunctionalityRepository functionRepo;

	@Override
	public FunctionalityTbl addNewFunctionality(FunctionalityTbl function) {
		FunctionalityTbl f =functionRepo.save(function);

		
		return f;
	}

	
}
