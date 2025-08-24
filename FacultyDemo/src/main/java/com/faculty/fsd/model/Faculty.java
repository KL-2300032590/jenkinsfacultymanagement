package com.faculty.fsd.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "faculty_table")
public class Faculty {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int fid;
	@Column(name = "fname", nullable = false)
	String name;
	@Column(name = "fdept", nullable = false)
	String dept;

	public int getFid() {
		return fid;
	}

	public void setFid(int fid) {
		this.fid = fid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDept() {
		return dept;
	}

	public void setDept(String dept) {
		this.dept = dept;
	}

	@Override

	public String toString() {
		return "Faculty [fid=" + fid + ", name=" + name + ", dept=" + dept + "]";
	}

}
