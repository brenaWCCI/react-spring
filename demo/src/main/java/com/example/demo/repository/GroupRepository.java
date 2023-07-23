package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.example.demo.model.Group;

public interface GroupRepository extends JpaRepository<Group, Long> {
    Group findByName(String name);
}