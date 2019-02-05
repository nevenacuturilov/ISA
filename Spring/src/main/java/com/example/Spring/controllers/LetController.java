package com.example.Spring.controllers;

import com.example.Spring.entities.Let;
import com.example.Spring.repositories.LetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/l")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")
public class LetController {

    @Autowired
    private LetRepository letRepository;

    @GetMapping("/letovi")
    public List<Let> getLetovi(){

        return letRepository.findAll();
    }

    @GetMapping("/let/{id}")
    public Let getLet(@PathVariable Integer id){
        return letRepository.findById(id).get(); //upitno da li radi

    }

    @DeleteMapping("/let")
    public boolean deleteLet(@RequestBody Let let){
        letRepository.delete(let);
        return true;
    }

    @PostMapping("/let")
    public Let createLet(@RequestBody Let let) {

        return letRepository.save(let);
    }

    @PutMapping("/let")
    public Let updateKorisnik(@RequestBody Let let) {

        return letRepository.save(let);
    }
}
