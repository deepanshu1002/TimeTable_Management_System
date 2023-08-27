package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.ForgotPasswordService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/forgotpassword")
@CrossOrigin("*")
public class ForgotPasswordController {

    @Autowired
    private ForgotPasswordService forgotPasswordService;

    @GetMapping
    public ResponseEntity<?> forgotPassword(@RequestParam String email) {
        // For demonstration purposes, let's assume the token is "example-token"
//        int resetToken = random.nextInt(9000) + 1000;
        System.out.println("email="+email);
        forgotPasswordService.sendPasswordResetEmail(email);
        
        return ResponseEntity.ok("reset link sent on eamil");
    }
}