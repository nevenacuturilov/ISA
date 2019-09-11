package com.example.Spring.controllers;

import com.example.Spring.entities.ConfirmationToken;
import com.example.Spring.entities.Korisnik;
import com.example.Spring.repositories.ConfirmationTokenRepository;
import com.example.Spring.repositories.KorisnikRepository;
import com.example.Spring.services.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/m")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")

public class MailController {

    @Autowired
    private MailService mailService;

    @Autowired
    private KorisnikRepository korisnikRepository;

    @Autowired
    private ConfirmationTokenRepository confirmationTokenRepository;

    @RequestMapping("sendEmail")
    public String send() {

        Korisnik korisnik  = new Korisnik();
        korisnik.setBrojTelefona("132546546");
        korisnik.setGrad("Moskva");
        korisnik.setIme("Anabela");
        korisnik.setPrezime("Ajsov");
        korisnik.setPassword("aa");
        korisnik.setUsername("aa");
        korisnik.setEmail("anabelaajsov22@gmail.com");

        try {
            mailService.sendEmail(korisnik);
        } catch (MailException mailException) {
            System.out.println(mailException);
        }
        return "Congratulations! Your mail has been send to the user.";
    }

    @PostMapping("/notifay")
    public Korisnik notifyKorisnik(@RequestBody Korisnik niz) {

        System.out.println("Usaooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");

        //Korisnik za = niz[0];
        //Korisnik od = niz[1];

        System.out.println("Zaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" + niz);
        //System.out.println("Odddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" + od);

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(niz.getEmail());
        mailMessage.setFrom("aplikacija");
        mailMessage.setText("Dodani ste");
        //mailMessage.setText("To confirm your account, please click here : "
        //+"http://localhost:8082/confirm-account?token="+confirmationToken.getToken());

        try {
            mailService.send(mailMessage);
        } catch (MailException mailException) {
            System.out.println(mailException);
        }

        System.out.println("Pre sevaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");


        return korisnikRepository.save(niz);
    }

    @RequestMapping("/sendic")
    public String Send(Integer id) {

        Korisnik za = korisnikRepository.findById(id).get();

        ConfirmationToken confirmationToken = new ConfirmationToken(za);
        confirmationTokenRepository.save(confirmationToken);

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(za.getEmail());
        mailMessage.setFrom("cuturilovnevena@gmail.com");
        mailMessage.setText("To confirm your account, please click here : "
                +"http://localhost:8082/confirm-account?token="+confirmationToken.getToken());

        try {
            mailService.send(mailMessage);
        } catch (MailException mailException) {
            System.out.println(mailException);
        }
        //User existingUser = userRepository.findByEmailIdIgnoreCase(user.getEmailId());

        return "Poslato";
        //return korisnikRepository.save(za);
    }

    @PostMapping("/conf")
    public Korisnik confKorisnik(@RequestBody String confirmationToken, Korisnik korisnik) {

        //ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);

        return korisnikRepository.save(korisnik);
    }
}
