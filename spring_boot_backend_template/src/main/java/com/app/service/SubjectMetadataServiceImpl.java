package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.SubjectMetadataResp;
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
		Department dept = deptRepo.findById(dto.getDeptId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid dept id"));
		Subject subject = subjectRepo.findById(dto.getSubjectId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid subject id"));
		TimetableSubjectsMetadata data = mapper.map(dto, TimetableSubjectsMetadata.class);
		data.setDept(dept);
		data.setSubject(subject);
		TimetableSubjectsMetadata persistantData = subjectMetadataRepo.save(data);
		return mapper.map(persistantData, TimetableSubjectMetadataDTO.class);
	}

	@Override
	public List<TimetableSubjectMetadataDTO> addSubjectMetadataWeeklyHrs(List<TimetableSubjectMetadataDTO> dtoList) {
		List<TimetableSubjectMetadataDTO> savedDTOs = new ArrayList<>();
		for (TimetableSubjectMetadataDTO dto : dtoList) {

			Department dept = deptRepo.findById(dto.getDeptId())
					.orElseThrow(() -> new ResourceNotFoundException("Invalid dept id"));
			Subject subject = subjectRepo.findById(dto.getSubjectId())
					.orElseThrow(() -> new ResourceNotFoundException("Invalid subject id"));
			TimetableSubjectsMetadata data = mapper.map(dto, TimetableSubjectsMetadata.class);
			data.setDept(dept);
			data.setSubject(subject);
			TimetableSubjectsMetadata persistantData = subjectMetadataRepo.save(data);
			savedDTOs.add(mapper.map(persistantData, TimetableSubjectMetadataDTO.class));
		}
		return savedDTOs;
	}

	public SubjectMetadataResp getSubjectMetadata(Long deptId, Long subjectId, String startDate) {
		TimetableSubjectsMetadata data = subjectMetadataRepo.findByDeptIdandSubjectIdandWeekStartDate(deptId, subjectId,
				LocalDate.parse(startDate));
		Department dept = deptRepo.findById(deptId).orElseThrow(() -> new ResourceNotFoundException("Invalid dept id"));
		Subject subject = subjectRepo.findById(subjectId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid subject id"));
		SubjectMetadataResp dto = new SubjectMetadataResp();
		dto.setId(data.getId());
		dto.setDeptName(dept.getDeptName());
		dto.setSubjectName(subject.getSubjectName());
		dto.setWeeklyHrs(data.getWeeklyHrs());
		dto.setStartDate(LocalDate.parse(startDate));
		return dto;
	}

	@Override
	public List<SubjectMetadataResp> getAllSubjectMetadata(Long deptId, String startdate) {

		List<TimetableSubjectsMetadata> dataList = subjectMetadataRepo.findByDeptDeptIdAndStartDate(deptId,LocalDate.parse(startdate));
		List<SubjectMetadataResp> dtoList = new ArrayList<>();

		for (TimetableSubjectsMetadata data : dataList) {
			SubjectMetadataResp dto = new SubjectMetadataResp();
			dto.setId(data.getId());
			dto.setDeptName(data.getDept().getDeptName());
			dto.setSubjectName(data.getSubject().getSubjectName());
			dto.setWeeklyHrs(data.getWeeklyHrs());
			dto.setStartDate(LocalDate.parse(startdate));
			dtoList.add(dto);
		}

		return dtoList;

	}

}
