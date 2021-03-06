package com.example.Spring.entities;

import javax.persistence.*;

@Entity
public class Sediste {

    @Id
    @GeneratedValue
    private Integer id;

    private String oznaka;

    private Boolean rezervisao;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lid", referencedColumnName = "id", insertable = false, updatable = false)
    private Let let;

    private String ime;

    private String prezime;

    private String brojPasosa;

    private String tipPuta;

    private Integer brojOsoba;

    private String klasa;

    private Integer kolicinaPrtljaga;

    public Sediste() {
    }

    public Sediste(String oznaka, Boolean rezervisao, String tipPuta, Integer brojOsoba, String klasa, Integer kolicinaPrtljaga) {
        this.oznaka = oznaka;
        this.rezervisao = rezervisao;
        this.tipPuta = tipPuta;
        this.brojOsoba = brojOsoba;
        this.klasa = klasa;
        this.kolicinaPrtljaga = kolicinaPrtljaga;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOznaka() {
        return oznaka;
    }

    public void setOznaka(String oznaka) {
        this.oznaka = oznaka;
    }

    public Boolean getRezervisao() {
        return rezervisao;
    }

    public void setRezervisao(Boolean rezervisao) {
        this.rezervisao = rezervisao;
    }

    public Let getLet() {
        return let;
    }

    public void setLet(Let let) {
        this.let = let;
    }

    public String getIme() { return ime; }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public String getPrezime() {
        return prezime;
    }

    public void setPrezime(String prezime) {
        this.prezime = prezime;
    }

    public String getBrojPasosa() {
        return brojPasosa;
    }

    public void setBrojPasosa(String brojPasosa) {
        this.brojPasosa = brojPasosa;
    }

    public String getTipPuta() {
        return tipPuta;
    }

    public void setTipPuta(String tipPuta) {
        this.tipPuta = tipPuta;
    }

    public Integer getBrojOsoba() {
        return brojOsoba;
    }

    public void setBrojOsoba(Integer brojOsoba) {
        this.brojOsoba = brojOsoba;
    }

    public String getKlasa() {
        return klasa;
    }

    public void setKlasa(String klasa) {
        this.klasa = klasa;
    }

    public Integer getKolicinaPrtljaga() {
        return kolicinaPrtljaga;
    }

    public void setKolicinaPrtljaga(Integer kolicinaPrtljaga) {
        this.kolicinaPrtljaga = kolicinaPrtljaga;
    }
}
