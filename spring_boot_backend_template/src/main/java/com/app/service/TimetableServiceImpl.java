package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.AddTimetableSlotDTO;
import com.app.dto.ApiResponseDto;
import com.app.dto.LectureRespDTO;
import com.app.dto.TimetableSlotRespoDTO;
import com.app.entities.ClassRoom;
import com.app.entities.Department;
import com.app.entities.Lecture;
import com.app.entities.Subject;
import com.app.entities.TimeTableMetadata;
import com.app.entities.TimetableSlot;
import com.app.entities.TimetableSubjectsMetadata;
import com.app.entities.Users;
import com.app.repository.ClassRoomRepository;
import com.app.repository.DepartmentRepository;
import com.app.repository.LectureRepository;
import com.app.repository.SubjectRepository;
import com.app.repository.TimeTableMetadataRepository;
import com.app.repository.TimeTableSlotRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class TimetableServiceImpl implements TimetableService {

	@Autowired
	private TimeTableSlotRepository timeTableSlotRepo;

	@Autowired
	private TimeTableMetadataRepository dataRepo;
	
	@Autowired
	private DepartmentRepository deptRepo;

	@Autowired
	private SubjectRepository subRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private ClassRoomRepository classroomRepo;

	@Autowired
	private ModelMapper mapper;

	private Long lectSlot;
	private Long breakSlot;
	private Double lectHrsPerSlot;
	private Double totalLectHrs;
	private Double lectLabHrs;
	private Long labSlot;
	private List<TimetableSlot> initialTimeTablelist=new ArrayList<TimetableSlot>();

	@Override
	public ApiResponseDto genTimeTable(Long deptId, LocalDate date) {
		slotCalculation(deptId, date);
		populateInitialList(deptId);
		return new ApiResponseDto("success");
	}

	public void slotCalculation(Long deptId, LocalDate date) {
		TimeTableMetadata metaData=dataRepo.getByWeekStartDateandDeptId(date, deptId);
		System.out.println(metaData);
		lectSlot=metaData.getNoOfLectursPerDay();
		System.out.println(lectSlot);
		breakSlot=metaData.getNoOfBreaks();
		System.out.println(breakSlot);
		labSlot=1L;
		lectLabHrs=metaData.getNoOfHrsThisWeek();
		System.out.println(lectLabHrs);
		totalLectHrs=lectLabHrs-(metaData.getNoOfDaysThisWeek()*metaData.getNoOfLabHrsDaily());
		System.out.println(totalLectHrs);
		lectHrsPerSlot=totalLectHrs/metaData.getNoOfDaysThisWeek()/lectSlot;
		System.out.println(lectHrsPerSlot);
		
	}
	
	public void populateInitialList(Long deptId) {
		List<Subject> subjects=subRepo.findByDeptDeptId(deptId);
		for (Subject subject : subjects) {
			//Users teacher, Subject subject, ClassRoom classroom, Department dept
			Users user=userRepo.findById(subject.getTeacherId().getUserId()).orElseThrow(()->new ResourceNotFoundException("Invalid user id"));
			Department dept=deptRepo.findById(subject.getDept().getDeptId()).orElseThrow(()->new ResourceNotFoundException("Invalid dept id"));
			ClassRoom classroom=classroomRepo.findById(dept.getClassroom().getClassroomId()).orElseThrow(()->new ResourceNotFoundException("Invalid classroom id"));
			
			TimetableSlot slot=new TimetableSlot(user, subject, classroom, dept);
			System.out.println(slot);
			initialTimeTablelist.add(slot);
		}
		
	}
	
	

}
