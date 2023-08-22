package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.DepartmentDTO;
import com.app.dto.LabVenueDTO;
import com.app.entities.Department;
import com.app.entities.Lab;
import com.app.entities.Subject;
import com.app.repository.LabRepo;
import com.app.repository.SubjectRepository;
@Service @Transactional
public class LabServiceImpl implements LabService{
 @Autowired
 private LabRepo labRepo;
	@Autowired
 private ModelMapper mapper;
@Autowired
private SubjectRepository subRepo;

@Override
public LabVenueDTO addNewLabVenue(LabVenueDTO dto) {
Lab labEntity = mapper.map(dto, Lab.class);
Lab persistentLab = labRepo.save(labEntity);
return mapper.map(persistentLab, LabVenueDTO.class);
}

}
