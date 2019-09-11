package com.example.Spring;

import com.example.Spring.entities.*;
import com.example.Spring.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication()
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

        korisnikRepository.save(new Korisnik("a", "a", "anabelaajsov22@gmail.com", "a", "a", "a", "a", false));
        korisnikRepository.save(new Korisnik("s", "s", "s", "s", "s", "s", "s", false));
        korisnikRepository.save(new Korisnik("x", "x", "x", "x", "x", "x", "x", false));
        korisnikRepository.save(new Korisnik("q", "q", "q", "q", "q", "q", "q", false));

        List<String> lokacijePresedanja = new ArrayList<String>();
        lokacijePresedanja.add("Bec");
        lokacijePresedanja.add("Temisvar");
        lokacijePresedanja.add("Berlin");
        lokacijePresedanja.add("Moskava");

        List<Sediste> konfiguracijaSedista = new ArrayList<Sediste>();
        Sediste sedistea1 = new Sediste("A1", false, "One way", 2, "Economy", 50);
        Sediste sedistea2 = new Sediste("A2", false, "One way", 2, "Economy", 50);
        Sediste sedistea3 = new Sediste("A3", false, "One way", 2, "Economy", 50);
        Sediste sedistea4 = new Sediste("A4", false, "One way", 2, "Economy", 50);

        Sediste sedisteb1 = new Sediste("B1", false, "One way", 2, "Economy", 50);
        Sediste sedisteb2 = new Sediste("B2", false, "One way", 2, "Economy", 50);
        Sediste sedisteb3 = new Sediste("B3", false, "One way", 2, "Economy", 50);
        Sediste sedisteb4 = new Sediste("B4", false, "One way", 2, "Economy", 50);

        Sediste sedistec1 = new Sediste("C1", false, "One way", 2, "Economy", 50);
        Sediste sedistec2 = new Sediste("C2", false, "One way", 2, "Economy", 50);
        Sediste sedistec3 = new Sediste("C3", false, "One way", 2, "Economy", 50);
        Sediste sedistec4 = new Sediste("C4", false, "One way", 2, "Economy", 50);

        Sediste sedisted1 = new Sediste("D1", false, "One way", 2, "Economy", 50);
        Sediste sedisted2 = new Sediste("D2", false, "One way", 2, "Economy", 50);
        Sediste sedisted3 = new Sediste("D3", false, "One way", 2, "Economy", 50);
        Sediste sedisted4 = new Sediste("D4", false, "One way", 2, "Economy", 50);

        sedisteRepository.save(sedistea1);
        sedisteRepository.save(sedistea2);
        sedisteRepository.save(sedistea3);
        sedisteRepository.save(sedistea4);
        sedisteRepository.save(sedisteb1);
        sedisteRepository.save(sedisteb2);
        sedisteRepository.save(sedisteb3);
        sedisteRepository.save(sedisteb4);
        sedisteRepository.save(sedistec1);
        sedisteRepository.save(sedistec2);
        sedisteRepository.save(sedistec3);
        sedisteRepository.save(sedistec4);
        sedisteRepository.save(sedisted1);
        sedisteRepository.save(sedisted2);
        sedisteRepository.save(sedisted3);
        sedisteRepository.save(sedisted4);

        konfiguracijaSedista.add(sedistea1);
        konfiguracijaSedista.add(sedistea2);
        konfiguracijaSedista.add(sedistea3);
        konfiguracijaSedista.add(sedistea4);
        konfiguracijaSedista.add(sedisteb1);
        konfiguracijaSedista.add(sedisteb2);
        konfiguracijaSedista.add(sedisteb3);
        konfiguracijaSedista.add(sedisteb4);
        konfiguracijaSedista.add(sedistec1);
        konfiguracijaSedista.add(sedistec2);
        konfiguracijaSedista.add(sedistec3);
        konfiguracijaSedista.add(sedistec4);
        konfiguracijaSedista.add(sedisted1);
        konfiguracijaSedista.add(sedisted2);
        konfiguracijaSedista.add(sedisted3);
        konfiguracijaSedista.add(sedisted4);

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

        administratorAviokompanijeRepository.save(new AdministratorAviokompanije("z", "z", "z", "z", "z","z", "z", false));

    }

}

