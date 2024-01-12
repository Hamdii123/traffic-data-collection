package com.example.mobileapp1.repository;

import com.example.mobileapp1.models.Incidents;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface IncidentsRepository extends JpaRepository<Incidents,Integer> {
}
