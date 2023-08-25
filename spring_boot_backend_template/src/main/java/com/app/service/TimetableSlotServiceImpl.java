package com.app.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.AddTimetableSlotDTO;
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

		Department dept = deptRepo.findById(dto.getDeptId()).orElseThrow();

		Subject subject = subRepo.findById(dto.getSubjectId()).orElseThrow();

		Users user = userRepo.findById(dto.getTeacherId()).orElseThrow();

		ClassRoom classroom = classroomRepo.findById(dto.getClassroomId()).orElseThrow();

		Lecture lecture = lectureRepo.findById(dto.getLectureDataId()).orElseThrow();
		TimetableSlot timetableSlot = mapper.map(dto, TimetableSlot.class);

		dept.addTimetableSlot(timetableSlot);
		subject.addTimetableSlot(timetableSlot);
		user.addTimetableSlot(timetableSlot);
		classroom.addTimetableSlot(timetableSlot);

		timetableSlot.setLectureData(lecture);
		TimetableSlot slot = timeTableSlotRepo.save(timetableSlot);

//		Long timetableSlotId, LocalDate date, LocalTime startTime, LocalTime endTime,
//		Long teacherId, String teacherName, Long subjectId, String subjectName, Long classroomId,
//		String classroomName, Long deptId, String deptName
//		
		return new TimetableSlotRespoDTO(slot.getSlotId(), slot.getDate(), slot.getStartTime(), slot.getEndTime(),
				slot.getTeacher().getUserId(), slot.getTeacher().getFirstName(), slot.getSubject().getSubjectId(),
				slot.getSubject().getSubjectName(), slot.getClassroom().getClassroomId(),
				slot.getClassroom().getClassroomName(), slot.getDept().getDeptId(), slot.getLectureData().getId(),
				slot.getDept().getDeptName());
	}

	@Override
	public TimetableSlotRespoDTO getTimetableSlotDetailsById(Long timetableSlotId) {

		TimetableSlot slot = timeTableSlotRepo.findById(timetableSlotId).orElseThrow();
		TimetableSlotRespoDTO timetableSlotDto = mapper.map(slot, TimetableSlotRespoDTO.class);

		return timetableSlotDto;
	}

	@Override
	public List<TimetableSlotRespoDTO> getLectureDetails(LocalDate date1, Long deptId) {
		List<TimetableSlot> listOfSlots = timeTableSlotRepo.findByDateAndDeptDeptId(date1, deptId);
		List<TimetableSlotRespoDTO> dtoList = new ArrayList<TimetableSlotRespoDTO>();

		if (listOfSlots.get(0).getLectureData() == null) {
			for (TimetableSlot slot : listOfSlots) {
				dtoList.add(new TimetableSlotRespoDTO(slot.getSlotId(), slot.getDate(), slot.getStartTime(),
						slot.getEndTime(), slot.getTeacher().getUserId(), slot.getTeacher().getFirstName(),
						slot.getSubject().getSubjectId(), slot.getSubject().getSubjectName(),
						slot.getClassroom().getClassroomId(), slot.getClassroom().getClassroomName(), deptId,
						slot.getDept().getDeptName()));
			}
		} else {

			for (TimetableSlot slot : listOfSlots) {
				dtoList.add(new TimetableSlotRespoDTO(slot.getSlotId(), slot.getDate(), slot.getStartTime(),
						slot.getEndTime(), slot.getTeacher().getUserId(), slot.getTeacher().getFirstName(),
						slot.getSubject().getSubjectId(), slot.getSubject().getSubjectName(),
						slot.getClassroom().getClassroomId(), slot.getClassroom().getClassroomName(), deptId,
						slot.getLectureData().getId(), slot.getDept().getDeptName()));
			}
		}

//		TimetableSlot timetableSlot=null;
//		
//		for(TimetableSlot t : listOfSlots)
//		{
//			Long id= t.getDept().getDeptId();
//		
//			if(id == deptId)
//				timetableSlot= t;
//		}
//		return mapper.map(timetableSlot, TimetableSlotRespoDTO.class);
		return dtoList;
	}

}
