package com.example.Spring.services;

import com.example.Spring.entities.Korisnik;
import com.example.Spring.repositories.ConfirmationTokenRepository;
import com.example.Spring.repositories.KorisnikRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    private JavaMailSender javaMailSender;

    @Autowired
    public MailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendEmail(Korisnik korsnik) throws MailException {

        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(korsnik.getEmail());
        mail.setFrom("cuturilovnevena@gmail.com");
        mail.setSubject("Testing Mail API");
        mail.setText("Hurray ! You have done that dude...");

        javaMailSender.send(mail);
    }

    public void send(SimpleMailMessage mail) throws MailException {
        System.out.println("Meeeeeeeeeeeeeeeeeetoda");

        javaMailSender.send(mail);
    }

}
