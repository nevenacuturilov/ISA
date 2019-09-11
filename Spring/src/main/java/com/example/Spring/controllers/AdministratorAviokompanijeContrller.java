package com.example.Spring.controllers;

import com.example.Spring.entities.AdministratorAviokompanije;
import com.example.Spring.repositories.AdministratorAviokompanijeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/aa")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class AdministratorAviokompanijeContrller {

    @Autowired
    private AdministratorAviokompanijeRepository administratorAviokompanijeRepository;

    @GetMapping("/administratoriAviokompanije")
    public List<AdministratorAviokompanije> getAdministratoriAviokompanije() {

        return administratorAviokompanijeRepository.findAll();
    }

    @GetMapping("/aadministratorAviokompanije/{id}")
    public AdministratorAviokompanije getAdministratorAviokompanije(@PathVariable Integer id) {

        //upitno da li radi
        return administratorAviokompanijeRepository.findById(id).get();
    }

    @DeleteMapping("/administratorAviokompanije/{id}")
    public boolean deleteAdministratorAviokompanije(@PathVariable Integer id) {

        administratorAviokompanijeRepository.deleteById(id);
        return true;
    }

    @PostMapping("/administratorAviokompanije")
    public AdministratorAviokompanije createAdministratorAviokompanije(@RequestBody AdministratorAviokompanije administratorAviokompanije) {

        return administratorAviokompanijeRepository.save(administratorAviokompanije);
    }

    @PutMapping("/administratorAviokompanije")
    public AdministratorAviokompanije updateAdministratorAviokompanije(@RequestBody AdministratorAviokompanije administratorAviokompanije) {

        return administratorAviokompanijeRepository.save(administratorAviokompanije);
    }
}
