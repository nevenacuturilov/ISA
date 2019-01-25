package com.example.Spring.repositories;

import com.example.Spring.entities.Korisnik;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KorisnikRepository extends JpaRepository<Korisnik, Integer> {

}
