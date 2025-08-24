package com.faculty.fsd.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.faculty.fsd.model.Faculty;
import com.faculty.fsd.repository.FacultyRepository;

@Service
public class FacultyServiceImpl implements FacultyService {

	@Autowired
	private FacultyRepository repository;

	@Override
	public String addFaculty(Faculty obj) {

		repository.save(obj);
		return "faculty added successfully";
	}

	@Override
	public List<Faculty> viewAllFaculty() {

		return repository.findAll();
	}

	@Override
	public String deleteFaculty(int fid) {
		String msg;

		Optional<Faculty> f = repository.findById(fid);
		if (f.isPresent()) {
			Faculty lax = f.get();
			repository.delete(lax);
			msg = "faculty deleted succesfully";
		} else {
			msg = "faculty id not found";
		}
		return msg;
	}

}
