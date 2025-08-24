package com.faculty.fsd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class FacultyDemoApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(FacultyDemoApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(FacultyDemoApplication.class, args);
        System.out.println("Project is Running....");
    }
}
