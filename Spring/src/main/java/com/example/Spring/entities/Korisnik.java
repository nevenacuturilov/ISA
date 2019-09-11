package com.example.Spring.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Korisnik {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String username;
    private String password;
    private String email;
    private String ime;
    private String prezime;
    private String grad;
    private String brojTelefona;
    private Boolean aktivan;
    private Boolean prihvatio;


    public Korisnik() {
    }

    public Korisnik(String username, String password, String email, String ime, String prezime, String grad, String brojTelefona, Boolean aktivan) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.ime = ime;
        this.prezime = prezime;
        this.grad = grad;
        this.brojTelefona = brojTelefona;
        this.aktivan = aktivan;

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public Boolean getAktivan() {
        return aktivan;
    }

    public void setAktivan(Boolean aktivan) {
        this.aktivan = aktivan;
    }

    public Boolean getPrihvatio() {
        return prihvatio;
    }

    public void setPrihvatio(Boolean prihvatio) {
        this.prihvatio = prihvatio;
    }
}