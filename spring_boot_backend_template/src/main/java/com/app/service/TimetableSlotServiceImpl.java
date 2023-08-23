package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.AddTimetableSlotDTO;
import com.app.dto.LectureRespDTO;
import com.app.dto.TimetableSlotRespoDTO;
import com.app.entities.ClassRoom;
import com.app.entities.Department;
import com.app.entities.Lecture;
import com.app.entities.Subject;
import com.app.entities.TimetableSlot;
import com.app.entities.Users;
import com.app.repository.ClassRoomRepository;
import com.app.repository.DepartmentRepository;
import com.app.repository.LectureRepository;
import com.app.repository.SubjectRepository;
import com.app.repository.TimeTableSlotRepository;
import com.app.repository.UserRepository;


@Service
@Transactional
public class TimetableSlotServiceImpl implements TimetableSlotService {
	
	
	@Autowired
	private DepartmentRepository deptRepo;
	
	@Autowired
	private SubjectRepository subRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private ClassRoomRepository classroomRepo;
	
	
	@Autowired
	private TimeTableSlotRepository timeTableSlotRepo;
	
	@Autowired
	private LectureRepository lectureRepo;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public Object addNewTimetableSlot(AddTimetableSlotDTO dto) {
		
		Department dept = deptRepo.findById(dto.getDeptId()).
				orElseThrow();
		
		Subject subject = subRepo.findById(dto.getSubjectId()).
				orElseThrow();
		
		Users user = userRepo.findById(dto.getTeacherId()).
				orElseThrow();
		
		ClassRoom classroom = classroomRepo.findById(dto.getClassroomId()).
				orElseThrow();
		
		Lecture lecture =lectureRepo.findById(dto.getLectureDataId()).
				orElseThrow();
		TimetableSlot timetableSlot = mapper.map(dto, TimetableSlot.class);
		
		dept.addTimetableSlot(timetableSlot);
		subject.addTimetableSlot(timetableSlot);
		user.addTimetableSlot(timetableSlot);
		classroom.addTimetableSlot(timetableSlot);
		
		
		TimetableSlot slot = timeTableSlotRepo.save(timetableSlot);
		
		return mapper.map(slot, TimetableSlotRespoDTO.class);
	}

	@Override
	public TimetableSlotRespoDTO getTimetableSlotDetailsById(Long timetableSlotId) {
			
			TimetableSlot slot =timeTableSlotRepo.findById(timetableSlotId).orElseThrow();
			TimetableSlotRespoDTO timetableSlotDto = mapper.map(slot, TimetableSlotRespoDTO.class);
				
				return timetableSlotDto;
	}

}
