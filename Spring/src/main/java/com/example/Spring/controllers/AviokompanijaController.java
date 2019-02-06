package com.example.Spring.controllers;

import com.example.Spring.entities.Aviokompanija;
import com.example.Spring.repositories.AviokompanijaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/a")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class AviokompanijaController {

    @Autowired
    private AviokompanijaRepository aviokompanijaRepository;

    @GetMapping("/aviokompanije")
    public List<Aviokompanija> getAviokompanije() {

        return aviokompanijaRepository.findAll();
    }

    @GetMapping("/aviokompanija/{id}")
    public Aviokompanija getLet(@PathVariable Integer id) {

        //upitno da li radi
        return aviokompanijaRepository.findById(id).get();

    }

    @DeleteMapping("/aviokompanija")
    public boolean deleteAviokompanija(@RequestBody Aviokompanija aviokompanija) {

        aviokompanijaRepository.delete(aviokompanija);
        return true;
    }

    @PostMapping("/aviokompanija")
    public Aviokompanija createAviokompanija(@RequestBody Aviokompanija aviokompanija) {

        return aviokompanijaRepository.save(aviokompanija);
    }

    @PutMapping("/aviokompanija")
    public Aviokompanija updateAviokompanija(@RequestBody Aviokompanija aviokompanija) {

        return aviokompanijaRepository.save(aviokompanija);
    }
}
