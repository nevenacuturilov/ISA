package com.example.Spring.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.ArrayList;

@Entity
public class Aviokompanija {

    @Id
    @GeneratedValue
    private Integer id;
    private String naziv;
    private String adresa; //razloziti?
    private String promotivniOpis;
    private ArrayList<String> destinacije;
    private ArrayList<Let> letovi;
    private String spisakKarata; //??
    private String konfiguracija; //??
    private String cenovnik; //??
    private String prtljag; //??

    public Aviokompanija() {
    }

    public Aviokompanija(String naziv, String adresa, String promotivniOpis, ArrayList<String> destinacije, ArrayList<Let> letovi,
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

    public ArrayList<String> getDestinacije() {
        return destinacije;
    }

    public void setDestinacije(ArrayList<String> destinacije) {
        this.destinacije = destinacije;
    }

    public ArrayList<Let> getLetovi() {
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
