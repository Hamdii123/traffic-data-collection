package com.example.mobileapp1.services;

import com.example.mobileapp1.models.Incidents;

import java.util.List;

public interface IncidentsServiceInterface {


    public String postpub (Incidents incidents);
    public List<Incidents> getpub ();
}
