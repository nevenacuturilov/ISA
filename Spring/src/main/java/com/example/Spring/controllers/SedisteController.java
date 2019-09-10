package com.example.Spring.controllers;

import com.example.Spring.entities.Sediste;
import com.example.Spring.repositories.SedisteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/s")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class SedisteController {

    @Autowired
    private SedisteRepository sedisteRepository;

    @GetMapping("/sedista")
    public List<Sediste> getSedista() {

        return sedisteRepository.findAll();
    }

    @GetMapping("/sediste/{id}")
    public Sediste getSediste(@PathVariable Integer id) {

        //upitno da li radi
        return sedisteRepository.findById(id).get();

    }

    @DeleteMapping("/sediste/{id}")
    public boolean deleteSediste(@PathVariable Integer id) {

        sedisteRepository.deleteById(id);
        return true;
    }

    @PostMapping("/sediste")
    public Sediste createSediste(@RequestBody Sediste sediste) {

        return sedisteRepository.save(sediste);
    }

    @PutMapping("/sediste")
    public Sediste updateSediste(@RequestBody Sediste sediste) {

        return sedisteRepository.save(sediste);
    }
}