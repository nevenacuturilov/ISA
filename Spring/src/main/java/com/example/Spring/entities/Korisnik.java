package com.example.Spring.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Korisnik {

    @Id
    @GeneratedValue
    private Integer id;
    private String email;
    private String password;
    private String ime;
    private String prezime;
    private String grad;
    private String brojTelefona;

    
    public Korisnik() {    	
    }
    
    public Korisnik(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public Korisnik(String email, String password, String ime, String prezime, String grad, String brojTelefona) {
        this.email = email;
        this.password = password;
        this.ime = ime;
        this.prezime = prezime;
        this.grad = grad;
        this.brojTelefona = brojTelefona;
    }

    public Integer getId() {

        return id;
    }

    public void setId(Integer id) {

        this.id = id;
    }

    public String getEmail() {

        return email;
    }

    public void setEmail(String email) {

        this.email = email;
    }

    public String getPassword() {

        return password;
    }

    public void setPassword(String password) {

        this.password = password;
    }

    public String getIme() {
        return ime;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public String getPrezime() {
        return prezime;
    }

    public void setPrezime(String prezime) {
        this.prezime = prezime;
    }

    public String getGrad() {
        return grad;
    }

    public void setGrad(String grad) {
        this.grad = grad;
    }

    public String getBrojTelefona() {
        return brojTelefona;
    }

    public void setBrojTelefona(String brojTelefona) {
        this.brojTelefona = brojTelefona;
    }
}