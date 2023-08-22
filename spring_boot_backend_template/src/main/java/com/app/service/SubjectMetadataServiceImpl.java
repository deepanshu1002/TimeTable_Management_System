package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.TimetableSubjectMetadataDTO;
import com.app.entities.Department;
import com.app.entities.Subject;
import com.app.entities.TimetableSubjectsMetadata;
import com.app.repository.DepartmentRepository;
import com.app.repository.SubjectMetadataRepo;
import com.app.repository.SubjectRepository;

@Service
@Transactional
public class SubjectMetadataServiceImpl implements SubjectMetadataService {
	@Autowired
	private SubjectMetadataRepo subjectMetadataRepo;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private DepartmentRepository deptRepo;
	@Autowired
	private SubjectRepository subjectRepo;

	@Override
	public TimetableSubjectMetadataDTO addSubjectMetadataWeeklyHrs(TimetableSubjectMetadataDTO dto) {
		Department dept = deptRepo.findById(dto.getDeptId()).orElseThrow(()-> new ResourceNotFoundException("Invalid dept id"));
				Subject subject = subjectRepo.findById(dto.getSubjectId()).orElseThrow(()-> new ResourceNotFoundException("Invalid subject id"));
		TimetableSubjectsMetadata data = mapper.map(dto, TimetableSubjectsMetadata.class);
		data.setDept(dept);
		data.setSubject(subject);
				TimetableSubjectsMetadata persistantData = subjectMetadataRepo.save(data);
;		return mapper.map(persistantData, TimetableSubjectMetadataDTO.class);
	}

}
