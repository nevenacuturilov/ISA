package com.example.Spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.Spring.entities.Korisnik;
import com.example.Spring.repositories.KorisnikRepository;

@SpringBootApplication
public class Application implements CommandLineRunner{

	@Autowired
    private KorisnikRepository korisnikRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		korisnikRepository.save(new Korisnik("a", "a"));
		korisnikRepository.save(new Korisnik("s", "s"));
		korisnikRepository.save(new Korisnik("x", "x"));
	}

}

