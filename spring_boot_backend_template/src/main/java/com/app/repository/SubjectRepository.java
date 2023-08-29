package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Subject;
import com.app.entities.Users;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
	@Query("SELECT new Subject(s.subjectId,s.subjectName,s.dept,s.teacherId) FROM Subject s where s.subjectId=?1")
	Subject getSubjectandDepartmentandTeacher(Long subId);
	@Query("SELECT s.subjectName FROM Subject s")
	List<String> getAllSubjectName();
	
	List<Subject> findByDeptDeptId(Long id);
	@Query("SELECT new Subject(s.subjectId,s.subjectName,s.dept,s.teacherId) FROM Subject s where s.subjectName=?1")
	Subject findBySubjectName(String subjectName);
	List<Subject> findByTeacherIdUserId(Long userId);
	Subject findByTeacherId(Users teacherId);
}
