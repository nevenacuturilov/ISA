package com.example.Spring.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Let {

    @Id
    @GeneratedValue
    private Integer id;

    private String datumPoletanja;

    private String vremePoletanja;

    private String datumSletanja;

    private String vremeSletanja;

    private String vremePutovanja;

    private String duzinaPutovanja;

    private Integer brojPresedanja;

    @ElementCollection(targetClass = String.class)
    private List<String> lokacijePresedanja;

    private Integer cenaKarte;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "aid", referencedColumnName = "id", insertable = false, updatable = false)
    private Aviokompanija aviokompanija;

    public Let() {
    }

    public Let(String datumPoletanja, String vremePoletanja, String datumSletanja, String vremeSletanja, String vremePutovanja,
               String duzinaPutovanja, Integer brojPresedanja, List<String> lokacijePresedanja, Integer cenaKarte) {
        this.datumPoletanja = datumPoletanja;
        this.vremePoletanja = vremePoletanja;
        this.datumSletanja = datumSletanja;
        this.vremeSletanja = vremeSletanja;
        this.vremePutovanja = vremePutovanja;
        this.duzinaPutovanja = duzinaPutovanja;
        this.brojPresedanja = brojPresedanja;
        this.lokacijePresedanja = lokacijePresedanja;
        this.cenaKarte = cenaKarte;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDatumPoletanja() {
        return datumPoletanja;
    }

    public void setDatumPoletanja(String datumPoletanja) {
        this.datumPoletanja = datumPoletanja;
    }

    public String getVremePoletanja() {
        return vremePoletanja;
    }

    public void setVremePoletanja(String vremePoletanja) {
        this.vremePoletanja = vremePoletanja;
    }

    public String getDatumSletanja() {
        return datumSletanja;
    }

    public void setDatumSletanja(String datumSletanja) {
        this.datumSletanja = datumSletanja;
    }

    public String getVremeSletanja() {
        return vremeSletanja;
    }

    public void setVremeSletanja(String vremeSletanja) {
        this.vremeSletanja = vremeSletanja;
    }

    public String getVremePutovanja() {
        return vremePutovanja;
    }

    public void setVremePutovanja(String vremePutovanja) {
        this.vremePutovanja = vremePutovanja;
    }

    public String getDuzinaPutovanja() {
        return duzinaPutovanja;
    }

    public void setDuzinaPutovanja(String duzinaPutovanja) {
        this.duzinaPutovanja = duzinaPutovanja;
    }

    public Integer getBrojPresedanja() {
        return brojPresedanja;
    }

    public void setBrojPresedanja(Integer brojPresedanja) {
        this.brojPresedanja = brojPresedanja;
    }

    public List<String> getLokacijePresedanja() {
        return lokacijePresedanja;
    }

    public void setLokacijePresedanja(ArrayList<String> lokacijePresedanja) {
        this.lokacijePresedanja = lokacijePresedanja;
    }

    public Integer getCenaKarte() {
        return cenaKarte;
    }

    public void setCenaKarte(Integer cenaKarte) {
        this.cenaKarte = cenaKarte;
    }

    public Aviokompanija getAviokompanija() {
        return aviokompanija;
    }

    public void setAviokompanija(Aviokompanija aviokompanija) {
        this.aviokompanija = aviokompanija;
    }

}