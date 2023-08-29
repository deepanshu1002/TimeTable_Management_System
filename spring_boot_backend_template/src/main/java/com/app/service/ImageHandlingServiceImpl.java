package com.app.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exceptions.ApiException;
import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ApiResponseDto;
import com.app.entities.Users;
import com.app.repository.UserRepository;

@Service
@Transactional
public class ImageHandlingServiceImpl implements ImageHandlingService {
	
	@Autowired
	private UserRepository userRepo;
	
	@Value("${folder.location}")
	private String folderLocation;
	
	@PostConstruct
	public void init() {
		System.out.println("in init "+ folderLocation);
		File folder = new File(folderLocation);
		if(folder.exists()) {
			System.out.println("Folder exists already !");
		} else {
			folder.mkdir();
			System.out.println("Created a folder !");
		}
	}

//	@Override
//	public ApiResponseDto uploadImage(Long userId, MultipartFile image) throws IOException {
//		//get user id 
//		Users user = userRepo.findById(userId)
//				.orElseThrow(() -> new ResourceNotFoundException("Invalid User Id"));
//		// user found --> PERSISTENT
//		// store the image on server side folder
//		System.out.println(image);
//		String path = folderLocation.concat(image.getOriginalFilename());
//		System.out.println(path);
//		// Use FileUtils method : writeByte[] --> File
//		FileUtils.writeByteArrayToFile(new File(path), image.getBytes());
//		user.setImagePath(path);
//		
//		return new ApiResponseDto("Image file uploaded successfully for emp id " + userId);
//	}
	@Override
	public String uploadFile(MultipartFile file,Long id) throws IOException {
		  // Generate a unique filename to avoid collisions
        String uniqueFileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        System.out.println(uniqueFileName);
        // Combine the directory and filename to create the full path
        Path filePath = Paths.get(folderLocation, uniqueFileName);

        // Save the file using the transferTo method
        Files.copy(file.getInputStream(), filePath);
        
        Users user = userRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid User Id"));
        user.setImagePath(filePath.toString());
        
        userRepo.save(user);
        // Store the filePath.toString() in the database
        // Code to save filePath.toString() to the database goes here

        return uniqueFileName;
	}

	@Override
	public String downloadImage(Long userId) throws IOException {
		//get user by id
		Users user = userRepo.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid User id"));
		//user found --> PRESISTENT
		String path = user.getImagePath();
		if (path != null) {
			// path ---> File --> byte[]
			return path;
			//OR from DB : return emp.getImage();
		} else 
			throw new ApiException("Image not yet assigned !!!!");
	}

}
