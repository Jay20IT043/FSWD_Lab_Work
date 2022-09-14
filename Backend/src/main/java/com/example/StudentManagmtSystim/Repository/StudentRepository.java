package com.example.StudentManagmtSystim.Repository;

import com.example.StudentManagmtSystim.Model.Student;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Integer> {
}
