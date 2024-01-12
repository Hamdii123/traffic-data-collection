package com.example.mobileapp1.services;

import com.example.mobileapp1.models.Incidents;
import com.example.mobileapp1.repository.IncidentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service

public class IncidentsServices implements IncidentsServiceInterface {
    @Autowired
    private IncidentsRepository incidentsRepository;


    @Override
    public String postpub (Incidents incidents)
    {
    incidentsRepository.save(incidents);
    return "success";
    }
    @Override
    public List<Incidents> getpub ()
    {
       return incidentsRepository.findAll();

    }
}
