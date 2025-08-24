package com.faculty.fsd.service;

import java.util.List;

import com.faculty.fsd.model.Faculty;

public interface FacultyService {
	
	public String addFaculty(Faculty obj);
	public List<Faculty> viewAllFaculty();
	public String deleteFaculty(int fid);

}
