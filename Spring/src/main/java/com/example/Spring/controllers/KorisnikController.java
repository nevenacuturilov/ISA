package com.example.Spring.controllers;

import com.example.Spring.entities.Korisnik;
import com.example.Spring.repositories.ConfirmationTokenRepository;
import com.example.Spring.repositories.KorisnikRepository;
import com.example.Spring.services.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/k")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class KorisnikController {

    @Autowired
    private MailService mailService;

    @Autowired
    private KorisnikRepository korisnikRepository;

    @Autowired
    private ConfirmationTokenRepository confirmationTokenRepository;

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

        System.out.println("Usaooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(korisnik.getEmail());
        mailMessage.setFrom("cuturilovnevena@gmail.com");
        mailMessage.setText("HEEEEEEEEEEEELOOOOOOOOOOOOOO");
        //mailMessage.setText("To confirm your account, please click here : "
        //+"http://localhost:8082/confirm-account?token="+confirmationToken.getToken())

        try {
            mailService.send(mailMessage);
        } catch (MailException mailException) {
            System.out.println(mailException);
        }


        return korisnikRepository.save(korisnik);
    }

    @PutMapping("/korisnik")
    public Korisnik updateKorisnik(@RequestBody Korisnik niz) {

        System.out.println("Usaooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");

        //Korisnik za = niz[0];
        //Korisnik od = niz[1];

        System.out.println("Zaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" + niz.getEmail());
        //System.out.println("Odddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" + od);

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(niz.getEmail());
        mailMessage.setFrom("aplikacija");
        mailMessage.setText("Dodani ste");
        //mailMessage.setText("To confirm your account, please click here : "
        //+"http://localhost:8082/confirm-account?token="+confirmationToken.getToken());

        try {
            mailService.send(mailMessage);
            System.out.println("Sendaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

        } catch (MailException mailException) {
            System.out.println(mailException);
        }

        System.out.println("Pre sevaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        return korisnikRepository.save(niz);
    }

}
