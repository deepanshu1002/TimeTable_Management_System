package com.app.service;

import java.util.List;

import com.app.dto.LabVenueDTO;

public interface LabService {
	LabVenueDTO addNewLabVenue(LabVenueDTO labVenue);
	LabVenueDTO getLabVenue(Long id);
	LabVenueDTO updateLabVenue(String Name,Long id);
	List<LabVenueDTO> getAlllabs(Long id);
}
