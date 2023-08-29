package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.DepartmentDTO;
import com.app.dto.LabVenueDTO;
import com.app.dto.LabVenuesDTO;
import com.app.entities.Department;
import com.app.entities.Lab;
import com.app.repository.DepartmentRepository;
import com.app.repository.LabRepo;
import com.app.repository.SubjectRepository;

@Service
@Transactional
public class LabServiceImpl implements LabService {
	@Autowired
	private LabRepo labRepo;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private SubjectRepository subRepo;
	@Autowired
	private DepartmentRepository departmentRepo;

	@Override
	public LabVenueDTO addNewLabVenue(LabVenueDTO dto) {
		Department dept = departmentRepo.findById(dto.getDeptId()).orElseThrow(null);
		Lab labEntity = mapper.map(dto, Lab.class);
		dept.addLab(labEntity);
		Lab persistentLab = labRepo.save(labEntity);
		return mapper.map(persistentLab, LabVenueDTO.class);
	}

	@Override
	public LabVenueDTO getLabVenue(Long id) {
		Lab lab = labRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("invalid id Lab not found"));
		LabVenueDTO labDto = mapper.map(lab, LabVenueDTO.class);
		labDto.setDeptId(lab.getDept().getDeptId());
		return labDto;
	}

	@Override
	public LabVenueDTO updateLabVenue(String labName, Long id) {
		Lab lab = labRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("invalid id Lab not found"));
		lab.setLabVenue(labName);
		return mapper.map(lab, LabVenueDTO.class);
	}

	@Override
	public List<LabVenueDTO> getAlllabs(Long id) {
		List<Lab> labList = labRepo.findByDeptDeptId(id);
		return labList.stream().map(lab -> mapper.map(lab, LabVenueDTO.class)).collect(Collectors.toList());

	}
	
	public List <LabVenuesDTO> getAllLabDetails() {
		List <LabVenuesDTO> labVenueList=new ArrayList<LabVenuesDTO>();
		List <Lab> labs = labRepo.findAll();
		for(Lab lab: labs) {
			LabVenuesDTO labDTO= mapper.map(lab, LabVenuesDTO.class);
			labVenueList.add(labDTO);
		}
		return labVenueList;
	}

}
