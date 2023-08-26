package com.app.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.AddFeedbackReqDTO;
import com.app.dto.ApiResponseDto;
import com.app.dto.GetFeedbackDTO;
import com.app.dto.TimeTableMetadataDto;
import com.app.entities.Department;
import com.app.entities.Feedback;
import com.app.entities.Subject;
import com.app.entities.TimeTableMetadata;
import com.app.entities.Users;
import com.app.repository.DepartmentRepository;
import com.app.repository.FeedbackRepository;
import com.app.repository.SubjectRepository;
import com.app.repository.TimeTableMetadataRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class TimeTableMetadataServiceImpl implements TimeTableMetadataService {

	@Autowired
	private TimeTableMetadataRepository metaDataRepo;

	@Autowired
	private DepartmentRepository deptRepo;

	@Autowired
	private ModelMapper mapper;

	@Override
	public ApiResponseDto addData(TimeTableMetadataDto data) {
		Department dept = deptRepo.findById(data.getDeptId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Dept ID , Dept not found !!!!"));
		TimeTableMetadata metaData = mapper.map(data, TimeTableMetadata.class);
		// This sets the week end date according to start date of the week
		metaData.setEndDate(metaData.getStartDate().plusDays(metaData.getNoOfDaysThisWeek()));
		dept.addMetaData(metaData); 
		//calcultes the total no of hours based on data provided look into entity class for logic
		metaData.setNoOfHrsThisWeek();
		metaDataRepo.save(metaData);
		return new ApiResponseDto("Metadata added successfully for " + dept.getDeptName());
	}

	@Override
	public TimeTableMetadataDto getDataByDateAndDeptId(String dateString, Long deptId) {
		TimeTableMetadata metaData = metaDataRepo.getByWeekStartDateandDeptId(LocalDate.parse(dateString), deptId);
		//TimeTableMetadata metaData = metaDataRepo.findByStartDateAndDeptDeptId(LocalDate.parse(dateString), deptId);
		//System.out.println(metaData.getId());
		TimeTableMetadataDto data = mapper.map(metaData, TimeTableMetadataDto.class);
		data.setDeptId(metaData.getDept().getDeptId());
		return data;
	}

}
