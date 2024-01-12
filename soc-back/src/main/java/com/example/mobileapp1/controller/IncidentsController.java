package com.example.mobileapp1.controller;

import com.example.mobileapp1.models.Incidents;
import com.example.mobileapp1.services.IncidentsServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("incidents")
@CrossOrigin
public class IncidentsController {
    @Autowired
    private IncidentsServices incidentsServices;


    @PostMapping("/post")
    public String postpub(@RequestBody Incidents incidents)
    {
        return incidentsServices.postpub(incidents);

    }
    @GetMapping("/get")
    public List<Incidents> getpubli()
    {
        return incidentsServices.getpub();
    }
}
