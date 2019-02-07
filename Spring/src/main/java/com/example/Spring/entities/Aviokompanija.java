package com.example.Spring.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Aviokompanija {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String naziv;

    private String adresa;

    private String promotivniOpis;

    @ElementCollection(targetClass = String.class)
    private List<String> destinacije;

    @OneToMany(mappedBy = "aviokompanija", fetch = FetchType.LAZY)
    private List<Let> letovi = new ArrayList<Let>();

    //??
    private String spisakKarata;

    //??
    private String konfiguracija;

    //??
    private String cenovnik;

    //??
    private String prtljag;

    public Aviokompanija() {
    }

    public Aviokompanija(String naziv, String adresa, String promotivniOpis, List<String> destinacije, List<Let> letovi,
                         String spisakKarata, String konfiguracija, String cenovnik, String prtljag) {
        this.naziv = naziv;
        this.adresa = adresa;
        this.promotivniOpis = promotivniOpis;
        this.destinacije = destinacije;
        this.letovi = letovi;
        this.spisakKarata = spisakKarata;
        this.konfiguracija = konfiguracija;
        this.cenovnik = cenovnik;
        this.prtljag = prtljag;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNaziv() {
        return naziv;
    }

    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }

    public String getAdresa() {
        return adresa;
    }

    public void setAdresa(String adresa) {
        this.adresa = adresa;
    }

    public String getPromotivniOpis() {
        return promotivniOpis;
    }

    public void setPromotivniOpis(String promotivniOpis) {
        this.promotivniOpis = promotivniOpis;
    }

    public List<String> getDestinacije() {
        return destinacije;
    }

    public void setDestinacije(ArrayList<String> destinacije) {
        this.destinacije = destinacije;
    }

    public List<Let> getLetovi() {
        return letovi;
    }

    public void setLetovi(ArrayList<Let> letovi) {
        this.letovi = letovi;
    }

    public String getSpisakKarata() {
        return spisakKarata;
    }

    public void setSpisakKarata(String spisakKarata) {
        this.spisakKarata = spisakKarata;
    }

    public String getKonfiguracija() {
        return konfiguracija;
    }

    public void setKonfiguracija(String konfiguracija) {
        this.konfiguracija = konfiguracija;
    }

    public String getCenovnik() {
        return cenovnik;
    }

    public void setCenovnik(String cenovnik) {
        this.cenovnik = cenovnik;
    }

    public String getPrtljag() {
        return prtljag;
    }

    public void setPrtljag(String prtljag) {
        this.prtljag = prtljag;
    }
}
