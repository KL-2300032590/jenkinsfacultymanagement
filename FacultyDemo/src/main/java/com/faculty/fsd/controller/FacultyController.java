package com.faculty.fsd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.faculty.fsd.model.Faculty;
import com.faculty.fsd.service.FacultyService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("klu/faculty")
@CrossOrigin(origins="*")
public class FacultyController {
	@Autowired
	private FacultyService fservice;

	@PostMapping("addfaculty")
	public String addFaculty(@RequestBody Faculty faculty) {
		return fservice.addFaculty(faculty);
	}
	
	@GetMapping("viewall")
	public List<Faculty> viewAllFaculty() {
		return fservice.viewAllFaculty();
	}
	
	@DeleteMapping("del")
	public String delFaculty(@RequestParam int fid) {
		return fservice.deleteFaculty(fid);
	}
	

}
