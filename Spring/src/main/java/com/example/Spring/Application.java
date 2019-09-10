package com.example.Spring;

import com.example.Spring.entities.*;
import com.example.Spring.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class Application implements CommandLineRunner {

    @Autowired
    private KorisnikRepository korisnikRepository;
    @Autowired
    private LetRepository letRepository;
    @Autowired
    private AviokompanijaRepository aviokompanijaRepository;
    @Autowired
    private AdministratorAviokompanijeRepository administratorAviokompanijeRepository;
    @Autowired
    private SedisteRepository sedisteRepository;

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
        lokacijePresedanja.add("Bec");
        lokacijePresedanja.add("Temisvar");
        lokacijePresedanja.add("Berlin");
        lokacijePresedanja.add("Moskava");

        List<Sediste> konfiguracijaSedista = new ArrayList<Sediste>();
        Sediste sedistea1 = new Sediste("A1", false);
        Sediste sedistea2 = new Sediste("A2", false);
        Sediste sedisteb1 = new Sediste("B1", false);
        Sediste sedisteb2 = new Sediste("B2", false);
        Sediste sedistec1 = new Sediste("C1", false);
        Sediste sedistec2 = new Sediste("C2", false);
        Sediste sedisted1 = new Sediste("D1", false);
        Sediste sedisted2 = new Sediste("D2", false);

        sedisteRepository.save(sedistea1);
        sedisteRepository.save(sedistea2);
        sedisteRepository.save(sedisteb1);
        sedisteRepository.save(sedisteb2);
        sedisteRepository.save(sedistec1);
        sedisteRepository.save(sedistec2);
        sedisteRepository.save(sedisted1);
        sedisteRepository.save(sedisted2);

        konfiguracijaSedista.add(sedistea1);
        konfiguracijaSedista.add(sedistea2);
        konfiguracijaSedista.add(sedisteb1);
        konfiguracijaSedista.add(sedisteb2);
        konfiguracijaSedista.add(sedistec1);
        konfiguracijaSedista.add(sedistec2);
        konfiguracijaSedista.add(sedisted1);
        konfiguracijaSedista.add(sedisted2);

        //LETOVI

        Let let1 = new Let("Bec","Atina","12.05.2016", "15:30", "12.05.2016", "16:30",
                "vreme", "1", 2, lokacijePresedanja, 330, konfiguracijaSedista);
        Let let2 = new Let("Oslo","Beograd","16.05.2016", "05:00", "16.05.2016", "06:30",
                "vreme", "1 h i 30 min", 1, lokacijePresedanja, 530, konfiguracijaSedista);
        Let let3 = new Let("Belin","Rim","18.05.2016", "12:30", "18.05.2016", "13:30",
                "vreme", "1 h", 0, lokacijePresedanja, 230, konfiguracijaSedista);
        Let let4 = new Let("Moskva","Rim","22.05.2016", "19:30", "22.05.2016", "20:30",
                "vreme", "1 h", 3, lokacijePresedanja, 300, konfiguracijaSedista);

        letRepository.save(let1);
        letRepository.save(let2);
        letRepository.save(let3);
        letRepository.save(let4);

        List<Let> letovi1 = new ArrayList<Let>();
        List<Let> letovi2 = new ArrayList<Let>();
        letovi1.add(let1);
        letovi1.add(let2);
        letovi2.add(let3);
        letovi2.add(let4);

        List<String> destinacije = new ArrayList<String>();
        destinacije.add("Atina");
        destinacije.add("Rim");
        /*destinacije.add("Novi Grad");
        destinacije.add("Novi Novi");*/

        //AVIOKOMPANIJE

        Aviokompanija a1 = new Aviokompanija("Air One", "Ulica BB 95, Beograd", "Opis", destinacije,
                letovi1, "karta1, karta2", "konfig", "cenovnik", "prtljag");
        Aviokompanija a2 = new Aviokompanija("Avion", "Save Kolarica 2c, Beograd", "Opis", destinacije,
                letovi2, "karta1, karta2", "konfig", "cenovnik", "prtljag");
        /*Aviokompanija a3 = new Aviokompanija("Srbija", "Isidore Sekulic 12, Beograd", "Opis", destinacije,
                letovi, "karta1, karta2", "konfig", "cenovnik", "prtljag");
        Aviokompanija a4 = new Aviokompanija("Air Air", "Ulica Hrastova 33, Beograd", "Opis", destinacije,
                letovi, "karta1, karta2", "konfig", "cenovnik", "prtljag");*/

        aviokompanijaRepository.save(a1);
        aviokompanijaRepository.save(a2);
        /*aviokompanijaRepository.save(a3);
        aviokompanijaRepository.save(a4);*/

        let1.setAviokompanija(a1);
        let2.setAviokompanija(a1);
        let3.setAviokompanija(a2);
        let4.setAviokompanija(a2);

        //sedistea1.setLet(let1);

        letRepository.flush();

        //ADMINISTRATORI

        administratorAviokompanijeRepository.save(new AdministratorAviokompanije("z", "z", "z", "z"));

    }

}

