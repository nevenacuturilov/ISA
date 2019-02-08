package com.example.Spring.controllers;

import com.example.Spring.entities.Korisnik;
import com.example.Spring.repositories.KorisnikRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/k")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class KorisnikController {

    @Autowired
    private KorisnikRepository korisnikRepository;

    @GetMapping("/korisnici")
    public List<Korisnik> getKorisnici() {

        return korisnikRepository.findAll();
    }

    @GetMapping("/korisnik/{id}")
    public Korisnik getKorisnik(@PathVariable Integer id) {

        //upitno da li radi
        return korisnikRepository.findById(id).get();

    }

    @DeleteMapping("/korisnik/{id}")
    public boolean deleteKorisnik(@PathVariable Integer id) {

        korisnikRepository.deleteById(id);
        return true;
    }

    @PostMapping("/korisnik")
    public Korisnik createKorisnik(@RequestBody Korisnik korisnik) {

        return korisnikRepository.save(korisnik);
    }

    @PutMapping("/korisnik")
    public Korisnik updateKorisnik(@RequestBody Korisnik korisnik) {

        return korisnikRepository.save(korisnik);
    }
}
