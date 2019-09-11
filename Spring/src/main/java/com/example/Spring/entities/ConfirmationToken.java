package com.example.Spring.entities;

import javax.persistence.*;
import java.util.UUID;

@Entity
public class ConfirmationToken {

    @Id
    @GeneratedValue
    private Integer id;

    private String token;

    //private Date createdDate;

    @OneToOne(targetEntity = Korisnik.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "kid")
    private Korisnik korisnik;

    public ConfirmationToken() {
        this.token = UUID.randomUUID().toString();
        //createdDate = new Date();
    }
    public ConfirmationToken(Korisnik korisnik) {
        this.token = UUID.randomUUID().toString();
        //createdDate = new Date();
        this.korisnik = korisnik;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Korisnik getKorisnik() {
        return korisnik;
    }

    public void setKorisnik(Korisnik korisnik) {
        this.korisnik = korisnik;
    }
}
