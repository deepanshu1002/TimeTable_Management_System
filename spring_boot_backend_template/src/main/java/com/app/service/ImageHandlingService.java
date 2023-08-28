package com.app.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ApiResponseDto;

public interface ImageHandlingService {
	//Upload Image API
	ApiResponseDto uploadImage(Long userId, MultipartFile image) throws IOException;
	//Download Image API
	byte[] downloadImage(Long userId) throws IOException;

}
