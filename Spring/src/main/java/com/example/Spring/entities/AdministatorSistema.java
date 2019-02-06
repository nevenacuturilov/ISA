package com.example.Spring.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class AdministatorSistema {

    @Id
    @GeneratedValue
    private Integer id;
    private String username;
    private String password;
    private String ime;
    private String prezime;
    private String grad;
    private String brojTelefona;

    public AdministatorSistema() {
    }

    public AdministatorSistema(String username, String password, String ime, String prezime, String grad, String brojTelefona) {
        this.username = username;
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
