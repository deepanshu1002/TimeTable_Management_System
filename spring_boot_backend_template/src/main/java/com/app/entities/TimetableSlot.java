package com.app.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.*;

import org.apache.catalina.User;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.*;


@Entity 
@Table(name = "timetable_slot_table") 
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = {"teacher","subject","classroom","dept","lecture data"})
public class TimetableSlot {
	
	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long slotId;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;
	
	@DateTimeFormat(pattern = "HH:mm:ss")
    private LocalTime startTime;
	
	@DateTimeFormat(pattern = "HH:mm:ss")
    private LocalTime endTime;
	
//    byte [] teacherPicture;
    
    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Users teacher;
    
    @ManyToOne
    @JoinColumn(name = "subject_id")
    private Subject subject;

    @ManyToOne
    @JoinColumn(name = "classroom_id")
    private ClassRoom classroom;
    
    @ManyToOne
    @JoinColumn(name = "dept_id")
    private Department dept;
    
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lecture_id")
    private Lecture lectureData;

	public TimetableSlot(Users teacher, Subject subject, ClassRoom classroom, Department dept) {
		super();
		this.teacher = teacher;
		this.subject = subject;
		this.classroom = classroom;
		this.dept = dept;
	}
    
    

}
