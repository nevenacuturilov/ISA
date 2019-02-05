package com.example.Spring;

import com.example.Spring.entities.Aviokompanija;
import com.example.Spring.entities.Let;
import com.example.Spring.repositories.AviokompanijaRepository;
import com.example.Spring.repositories.LetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.Spring.entities.Korisnik;
import com.example.Spring.repositories.KorisnikRepository;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class Application implements CommandLineRunner{

	@Autowired
    private KorisnikRepository korisnikRepository;
    @Autowired
    private LetRepository letRepository;
    @Autowired
    private AviokompanijaRepository aviokompanijaRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

	    //KORISNICI

		korisnikRepository.save(new Korisnik("a", "a", "a", "a", "a", "a"));
		korisnikRepository.save(new Korisnik("s", "s", "s", "s", "s", "s"));
		korisnikRepository.save(new Korisnik("x", "x", "x", "x", "x", "x"));
        korisnikRepository.save(new Korisnik("q", "q", "q", "q", "q", "q"));

        List<String> lokacijePresedanja = new ArrayList<String>();
        lokacijePresedanja.add("Novi Sad");
        lokacijePresedanja.add("Novi Pazar");
        lokacijePresedanja.add("Novi Grad");
        lokacijePresedanja.add("Novi Novi");

        //LETOVI

        Let let1 = new Let("12.05.2016","15:30", "12.05.2016", "16:30",
                "vreme", "1", 2, lokacijePresedanja, 330);
        Let let2 = new Let("16.05.2016","05:00", "16.05.2016", "06:30",
                "vreme", "1 h i 30 min", 1, lokacijePresedanja, 530);
        Let let3 = new Let("18.05.2016","12:30", "18.05.2016", "13:30",
                "vreme", "1 h", 0, lokacijePresedanja, 230);
        Let let4 = new Let("22.05.2016","19:30", "22.05.2016", "20:30",
                "vreme", "1 h", 3, lokacijePresedanja, 300);

        letRepository.save(let1);
        letRepository.save(let2);
        letRepository.save(let3);
        letRepository.save(let4);

        List<Let> letovi = new ArrayList<Let>();
        letovi.add(let1);
        letovi.add(let2);
        letovi.add(let3);
        letovi.add(let4);

        List<String> destinacije = new ArrayList<String>();
        destinacije.add("Novi Sad");
        destinacije.add("Novi Pazar");
        destinacije.add("Novi Grad");
        destinacije.add("Novi Novi");

        //AVIOKOMPANIJE

        Aviokompanija a1 = new Aviokompanija("Air One", "Ulica BB 95, Beograd", "Opis", destinacije,
                letovi, "karta1, karta2", "konfig", "cenovnik", "prtljag");
        Aviokompanija a2 = new Aviokompanija("Avioncici", "Save Kolarica 2c, Beograd", "Opis", destinacije,
                letovi, "karta1, karta2", "konfig", "cenovnik", "prtljag");
        Aviokompanija a3 = new Aviokompanija("Srbija", "Isidore Sekulic 12, Beograd", "Opis", destinacije,
                letovi, "karta1, karta2", "konfig", "cenovnik", "prtljag");
        Aviokompanija a4 = new Aviokompanija("Air Air", "Ulica Hrastova 33, Beograd", "Opis", destinacije,
                letovi, "karta1, karta2", "konfig", "cenovnik", "prtljag");

        aviokompanijaRepository.save(a1);
        aviokompanijaRepository.save(a2);
        aviokompanijaRepository.save(a3);
        aviokompanijaRepository.save(a4);
	}

}

