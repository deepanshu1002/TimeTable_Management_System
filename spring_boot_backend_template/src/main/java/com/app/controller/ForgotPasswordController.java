package com.app.controller;

import java.util.Random;

import org.apache.catalina.mapper.Mapper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ForgotPasswordDTO;
import com.app.service.ForgotPasswordService;


@RestController
@RequestMapping("/forgotpassword")
@CrossOrigin("*")
public class ForgotPasswordController {

    @Autowired
    private ForgotPasswordService forgotPasswordService;
    

    @PostMapping("/email")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordDTO dto) {
        // For demonstration purposes, let's assume the token is "example-token"
    	String email=dto.getEmail();
    	System.out.println(email);
    	Random random = new Random();
        int resetToken = random.nextInt(9000) + 1000;
        
//        System.out.println("email="+email);
        forgotPasswordService.sendPasswordResetEmail(email, resetToken);
        
        return ResponseEntity.ok("reset link sent on eamil");
    }
    
    @PutMapping
    public ResponseEntity<?> updatePassword(@RequestBody ForgotPasswordDTO updateCodeDto){
   System.out.println(updateCodeDto);
    forgotPasswordService.updatePassword(updateCodeDto.getEmail(), updateCodeDto.getCode(), updateCodeDto.getPassword());
    
    return ResponseEntity.ok("password updated successfully");
   }
    
}