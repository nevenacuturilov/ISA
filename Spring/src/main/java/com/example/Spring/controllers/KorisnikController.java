package com.example.Spring.controllers;

import com.example.Spring.entities.Korisnik;
import com.example.Spring.repositories.KorisnikRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")
public class KorisnikController {

    @Autowired
    private KorisnikRepository korisnikRepository;

    @GetMapping("/korisnici")
    public List<Korisnik> getKorisnici(){
        return korisnikRepository.findAll();
    }

    @GetMapping("/korisnik/{id}")
    public Korisnik getKorisnik(@PathVariable Integer id){
       return korisnikRepository.findById(id).get(); //upitno da li radi

    }

    @DeleteMapping("/korisnik")
    public boolean deleteKorisnik(@RequestBody Korisnik korisnik){
        korisnikRepository.delete(korisnik);
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

