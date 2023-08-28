package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ForgotPasswordService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendPasswordResetEmail(String userEmail) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(userEmail);
        mailMessage.setSubject("Password Reset Request");
        mailMessage.setText("We got a request to reset your Timetable Management System password.\n\n"
        		+"change your password using following link./n/n" + "If this is not you, please ignore.. /n/n "
                +"http://localhost:9988/set-password?email="+userEmail);
        
        javaMailSender.send(mailMessage);
    }
}
