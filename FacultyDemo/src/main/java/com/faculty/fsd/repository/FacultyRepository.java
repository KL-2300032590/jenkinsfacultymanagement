package com.faculty.fsd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.faculty.fsd.model.Faculty;

@Repository
public interface FacultyRepository extends JpaRepository<Faculty, Integer> {

}
