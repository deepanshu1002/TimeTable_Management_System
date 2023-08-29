package com.app.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.AddLectureDTO;
import com.app.dto.DepartmentDTO;
import com.app.dto.LectureRespDTO;
import com.app.entities.Department;
import com.app.entities.Lecture;
import com.app.entities.Subject;
import com.app.repository.DepartmentRepository;
import com.app.repository.LectureRepository;
import com.app.repository.SubjectRepository;

import io.swagger.v3.oas.annotations.responses.ApiResponse;


@Service
@Transactional
public class LectureServiceImpl implements LectureService{

	@Autowired
	private LectureRepository lectureRepo;
	
	@Autowired
	private DepartmentRepository deptRepo;
	
	@Autowired
	private SubjectRepository subRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	  @Value("${upload.directory}") // Read the upload directory from application.properties
	    private String uploadDirectory;
	
	@Override
	public LectureRespDTO addNewLectureData(AddLectureDTO dto) {
		
		Department dept = deptRepo.findById(dto.getDeptartmentId()).
				orElseThrow();
		Lecture lecture = mapper.map(dto, Lecture.class);
		
		dept.addLecture(lecture);
		Subject sub = subRepo.findById(dto.getSubjectId()).orElseThrow();
		sub.addLecture(lecture);
//		System.out.println("before lecture: " + lecture.getTopicsCovered() + lecture.getDate());
		Lecture lect = lectureRepo.save(lecture);
//		System.out.println("lecture: " + lect.getTopicsCovered() + lect.getDate());
		
		return mapper.map(lect, LectureRespDTO.class);
	}
	
	
	

	@Override
	public LectureRespDTO getLectureDetails(Long deptId, Long subId, LocalDate date) {
		
		List <Lecture> lectures = lectureRepo.findByDate(date);
		
		Lecture lecture1=null;
		for(Lecture l : lectures)
		{
			Long departmentId = l.getDept().getDeptId();
			Long subjectId = l.getSub().getSubjectId();
			
			if(departmentId == deptId && subjectId == subId)
				lecture1= l;
		}
		
		//throw exception if lecture is null
		return mapper.map(lecture1, LectureRespDTO.class);
	}


	@Override
	public LectureRespDTO getLectureDetailsById(Long lectureId) {
		
		Lecture l =lectureRepo.findById(lectureId).orElseThrow();
		LectureRespDTO lectureDto = mapper.map(l, LectureRespDTO.class);
			
			return lectureDto;
	}

	@Override
	public String deleteLectureDetails(Long lectureId) {
//		LectureRespDTO lect =getLectureDetailsById(lectureId);
		// => emp id valid
		lectureRepo.deleteById(lectureId);
		
		return ("emp details deleted !");
	}




	@Override
	public List <LectureRespDTO> getAllLectureDetails() {
			List <LectureRespDTO> lectureList=new ArrayList<>();
			List <Lecture> lectures = lectureRepo.findAll();
			for(Lecture lecture: lectures) {
				LectureRespDTO lectDto= mapper.map(lecture, LectureRespDTO.class);
				lectureList.add(lectDto);
			}
			return lectureList;
	}




	@Override
	public LectureRespDTO getLectureDetailsForSlot(Long deptId, LocalDate date, LocalTime time) {
		Lecture lecture=lectureRepo.findByDeptDeptIdAndDateAndStartTime(deptId, date, time);
		
		return mapper.map(lecture, LectureRespDTO.class);
	}




	@Override
	public String uploadFile(MultipartFile file,Long id) throws IOException {
		  // Generate a unique filename to avoid collisions
        String uniqueFileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        System.out.println(uniqueFileName);
        // Combine the directory and filename to create the full path
        Path filePath = Paths.get(uploadDirectory, uniqueFileName);

        // Save the file using the transferTo method
        Files.copy(file.getInputStream(), filePath);
        
        Lecture lecture=lectureRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("invalid lecture id"));
        lecture.setLectureData(filePath.toString());
        lectureRepo.save(lecture);
        // Store the filePath.toString() in the database
        // Code to save filePath.toString() to the database goes here

        return uniqueFileName;
	}




	@Override
	public String downloadFile(Long id) {
		
		return lectureRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("Invalid id")).getLectureData();
	}

}
