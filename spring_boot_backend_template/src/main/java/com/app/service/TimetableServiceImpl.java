package com.app.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.AddTimetableSlotDTO;
import com.app.dto.ApiResponseDto;
import com.app.dto.LectureRespDTO;
import com.app.dto.SubjectMetadataResp;
import com.app.dto.TimetableSlotRespoDTO;
import com.app.dto.TimetableSubjectMetadataDTO;
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
	private SubjectMetadataService subService;

	@Autowired
	private ModelMapper mapper;

	private TimeTableMetadata metaData;
	private Long lectSlot;
	private Long breakSlot;
	private double lectHrsPerSlot;
	private double totalLectHrs;
	private double lectLabHrs;
	private Long labSlot;
	private LocalDate weekDate;
	private List<TimetableSlot> initialTimeTablelist = new ArrayList<TimetableSlot>();
	private List<TimetableSlot> finalTimeTablelist = new ArrayList<TimetableSlot>();
	private List<LocalTime> lectTimeList = new ArrayList<LocalTime>();
	private List<SubjectMetadataResp> subMetadataList = new ArrayList<>();

	@Override
	public ApiResponseDto genTimeTable(Long deptId, LocalDate date) {
		weekDate = date;
		slotCalculation(deptId, date);
		populateLectTimeList();
		populateInitialList(deptId);
		populateSubMetadataList(deptId, date);
		populateFinalList();
		return new ApiResponseDto("success");
	}

	public void slotCalculation(Long deptId, LocalDate date) {
		metaData = dataRepo.getByWeekStartDateandDeptId(date, deptId);
		System.out.println(metaData);
		lectSlot = metaData.getNoOfLectursPerDay();
		System.out.println(lectSlot);
		breakSlot = metaData.getNoOfBreaks();
		System.out.println(breakSlot);
		labSlot = 1L;
		lectLabHrs = metaData.getNoOfHrsThisWeek();
		System.out.println(lectLabHrs);
		totalLectHrs = lectLabHrs - (metaData.getNoOfDaysThisWeek() * metaData.getNoOfLabHrsDaily());
		System.out.println(totalLectHrs);
		lectHrsPerSlot = totalLectHrs / metaData.getNoOfDaysThisWeek() / lectSlot;
		System.out.println(lectHrsPerSlot);

	}

	public void populateInitialList(Long deptId) {
		List<Subject> subjects = subRepo.findByDeptDeptId(deptId);
		for (Subject subject : subjects) {
			// Users teacher, Subject subject, ClassRoom classroom, Department dept
			Users user = userRepo.findById(subject.getTeacherId().getUserId())
					.orElseThrow(() -> new ResourceNotFoundException("Invalid user id"));
			Department dept = deptRepo.findById(subject.getDept().getDeptId())
					.orElseThrow(() -> new ResourceNotFoundException("Invalid dept id"));
			ClassRoom classroom = classroomRepo.findById(dept.getClassroom().getClassroomId())
					.orElseThrow(() -> new ResourceNotFoundException("Invalid classroom id"));

			TimetableSlot slot = new TimetableSlot(user, subject, classroom, dept);
			System.out.println(slot.getSubject().getSubjectName());
			initialTimeTablelist.add(slot);
		}

	}

	public void populateLectTimeList() {
		LocalTime time = metaData.getCollegeStartTime();

		while (true) {

			if (time.equals(metaData.getBreakStartTime1())) {
				lectTimeList.add(time);
				time = metaData.getBreakEndTime1();
			}
			if (time.equals(metaData.getBreakStartTime2())) {
				lectTimeList.add(time);
				time = metaData.getBreakEndTime2();

			}
			if (time.equals(metaData.getBreakStartTime3())) {
				lectTimeList.add(time);
				time = metaData.getBreakEndTime3();

			}
			lectTimeList.add(time);
			time = time.plusHours((long) lectHrsPerSlot);
			if (time.isAfter(metaData.getCollegeEndTime()))
				break;
		}

		System.out.println(lectTimeList);
	}

	public void populateSubMetadataList(Long id, LocalDate date) {
		subMetadataList = subService.getAllSubjectMetadata(id, date.toString());
		System.out.println(subMetadataList);
	}

	public void populateFinalList() {

		TimetableSlot slot = null;

		for (int j = 0; j < metaData.getNoOfDaysThisWeek(); j++) {
			int i = 0;
			int timeSlot = 0;
			int count=0;
			for (; i <= (lectSlot + labSlot); i++) {

				if (i <= initialTimeTablelist.size() - 1) {
					slot = initialTimeTablelist.get(i);
				} else {

					slot = initialTimeTablelist.get(i - initialTimeTablelist.size());
				}

				Subject sub = slot.getSubject();

				System.out.println(lectTimeList.get(timeSlot));
				System.out.println(sub.getSubjectName());

				if (lectTimeList.get(timeSlot).equals(metaData.getBreakStartTime1())) {
					timeSlot++;
				} else if (lectTimeList.get(timeSlot).equals(metaData.getBreakStartTime2())) {
					timeSlot++;
				} else if (lectTimeList.get(timeSlot).equals(metaData.getBreakStartTime3())) {
					timeSlot++;
				}

				for (SubjectMetadataResp subResp : subMetadataList) {
					System.out.println("subResp="+subResp.getSubjectName());
					if (sub.getSubjectName().equals(subResp.getSubjectName())) {

						if (subResp.getWeeklyHrs() != 0) {
							finalTimeTablelist.add(new TimetableSlot(slot.getTeacher(), slot.getSubject(),
									slot.getClassroom(), slot.getDept()));
							TimetableSlot slot1 = finalTimeTablelist.get(finalTimeTablelist.size() - 1);
							slot1.setDate(weekDate);
							slot1.setStartTime(lectTimeList.get(timeSlot));
							slot1.setEndTime(lectTimeList.get(timeSlot + 1));
							slot1.getTeacher().addTimetableSlot(slot1);
							slot1.getSubject().addTimetableSlot(slot1);
							slot1.getClassroom().addTimetableSlot(slot1);
							slot1.getDept().addTimetableSlot(slot1);
							// finalTimeTablelist.add(slot);
							System.out.println(finalTimeTablelist);
							subResp.setWeeklyHrs(subResp.getWeeklyHrs() - (int) lectHrsPerSlot);
							timeSlot++;
							
							break;
						}
					}
				}
			}
			Collections.shuffle(initialTimeTablelist);
			weekDate=weekDate.plusDays(1);
			System.out.println(subMetadataList);
			System.out.println(initialTimeTablelist);
		} // weekDate.plusDays(1);

	}
}
