package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.app.entities.ForgotPasswordCode;
import com.app.entities.Users;
import com.app.repository.ForgotPasswordRepo;
import com.app.repository.IsValidUserRepo;
import com.app.repository.UserRepository;

@Service
public class ForgotPasswordService {

    @Autowired
    private JavaMailSender javaMailSender;
    
	@Autowired
	private ForgotPasswordRepo forgotPassword;
	
	@Autowired
	private UserRepository userRepo;

    public void sendPasswordResetEmail(String userEmail, int resetToken) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(userEmail);
        mailMessage.setSubject("Password Reset Request");
        mailMessage.setText("We got a request to reset your Timetable Management System password."+
                   "Four digit verification code is: "+resetToken+
        		 " If this is not you, please ignore");
        ForgotPasswordCode code = new ForgotPasswordCode(userEmail,resetToken);
        forgotPassword.save(code);
        
        javaMailSender.send(mailMessage);
    }

	public void updatePassword(String email, int updateCode, String updatePassword) {
		System.out.println("emai= "+ email +"updateCode= "+updateCode+ "updatePassword= "+ updatePassword);
		ForgotPasswordCode forgotCode= forgotPassword.findByEmail(email);
		System.out.println("forgot code ="+forgotCode);
		if(forgotCode.getCode() == updateCode) {
		Users updateUser=	userRepo.findByEmail(email).orElseThrow();
		
		updateUser.setPassword(updatePassword);
		
		userRepo.save(updateUser);
		forgotPassword.delete(forgotCode);
			
		}
		
		
		
	}
}
