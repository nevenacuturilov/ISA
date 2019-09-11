import { Component, OnInit } from '@angular/core';
import { Let } from 'app/models/let';
import { LetService } from 'app/services/let.service';
import { Router } from '@angular/router';
import { Sediste } from 'app/models/sediste';
import { SedisteService } from 'app/services/sediste.service';
import { KorisnikService } from 'app/services/korisnik.service';
import { Korisnik } from 'app/models/korisnik';
import { Aviokompanija } from 'app/models/aviokompanija';
import { AviokompanijaService } from 'app/services/aviokompanija.service';



@Component({
  selector: 'app-rezervisi',
  templateUrl: './rezervisi.component.html',
  styleUrls: ['./rezervisi.component.scss']
})
export class RezervisiComponent implements OnInit {

  private a: Aviokompanija;

  private leet: Let;
  private korisnik: Korisnik;

  private sedista: Sediste[] = [];
  private sediste: Sediste;
  private sedistaRez: Sediste[] = [];

  private counter = 0;
  private nizZaIspis: number[] = []

  private buttonColorr: string[] = ['#5bc0de', '#5bc0de', '#5bc0de', '#5bc0de', '#5bc0de', '#5bc0de', '#5bc0de', '#5bc0de',
  '#5bc0de', '#5bc0de', '#5bc0de', '#5bc0de', '#5bc0de', '#5bc0de', '#5bc0de', '#5bc0de'];
  // private buttonColorr: string[] = [];

  private ss: Sediste[] = [];
  constructor(private letService: LetService, private sedisteService: SedisteService,
    private korisnikService: KorisnikService, private router: Router, private aviokompanijaService: AviokompanijaService
    ) { }

  ngOnInit() {

    this.a = this.aviokompanijaService.getter();

    this.leet = this.letService.getter();
    console.log('Inicijalizacija' + this.leet);

    this.korisnik = this.korisnikService.getter();
    console.log('Inicijalizacija' + this.korisnik.ime);
    console.log('Inicijalizacija' + this.korisnik.prezime);

    /// this.sedistaRez = []

    this.sedisteService.getSeats().subscribe((seats) => {
      this.sedista = seats;

      for (let j = 0; j < this.sedista.length; j++) {
        console.log(this.sedista[j].oznaka)
        console.log(this.sedista[j].boja)
        console.log('\n')
      }
      // console.log('L ' + this.sedista.length);
      // console.log('Inicijalizacija' + seats);
    }, (error) => {
      console.log(error);
    });

    console.log('ser' + this.sedistaRez);

    // this.sedistaRez = this.sedisteService.getterR();

    /*for (let i = 0; i < this.sedistaRez.length; i++) {
      for (let j = 0; j < this.sedista.length; j++) {
       if (this.sedista[j].id === this.sedistaRez[i].id) {
        console.log('isto');

          this.buttonColorr[j] = '#292b2c';
       } else {
        this.buttonColorr[j] = '#5bc0de';
       }
      }

     }*/

  }

  zavrsiSelekciju() {
    // this.sedistaRez = this.sedisteService.getterR();
    // console.log(this.sedistaRez)

    for (let i = 0; i < this.sedista.length; i++) {
      if (this.sedistaRez[i] === undefined) {
         console.log('Un')
      } else {
      console.log(this.sedistaRez[i].oznaka)
      console.log(this.sedistaRez[i].boja)
      console.log('\n')


      this.sedistaRez[i].ime = this.korisnik.ime;
      this.sedistaRez[i].prezime = this.korisnik.prezime;
      // console.log(this.sedistaRez[i].ime)
      // console.log(this.sedistaRez[i].prezime)
     }

    }

  }

  potvrdiRezervaciju() {
    // console.log(this.sedistaRez)

    for (let i = 0; i < this.sedistaRez.length; i++) {
      this.sedistaRez[i].boja = '#292b2c';

      for (let j = 0; j < this.sedistaRez.length; j++) {
        console.log(this.sedistaRez[j].oznaka)
        console.log(this.sedistaRez[j].boja)
        console.log('\n')
      }
      this.sedisteService.updateSeat(this.sedistaRez[i]).subscribe((flight) => {
      }, (error) => {
        console.log(error);
      });

    }

    console.log('Potvrdiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')


    this.sedisteService.getSeats().subscribe((seats) => {
      this.ss = seats;
    }, (error) => {
      console.log(error);
    });

    for (let j = 0; j < this.ss.length; j++) {
      console.log('SS' + this.ss[j].oznaka)
      console.log('SS' + this.ss[j].boja)
      console.log('\n')
    }
     this.sedisteService.setterR(this.sedistaRez);
     this.aviokompanijaService.setter(this.a);
     this.router.navigate(['/rezervacija']);



  }

  kliki(x: number) {

    for (let i = 0; i < this.sedista.length; i++) {
      if (i === x) {
        this.sediste = this.sedista[i];

        // plava
        if (this.buttonColorr[i] === '#5bc0de') {
          console.log('Plava je bila');
          this.buttonColorr[i] = '#5cb85c';
          this.sediste.rezervisano = true;
          this.sediste.boja = '#5cb85c';
          this.sedistaRez.push(this.sediste);
          // console.log('DODATO ' + this.sediste.oznaka);
        } else
          // zelena
          if (this.buttonColorr[i] === '#5cb85c') {
            console.log('Zelena je bila');
            this.buttonColorr[i] = '#5bc0de';
            this.sediste.rezervisano = false;
            this.sediste.boja = '#5bc0de';

            if (this.sedistaRez.length !== 0) {
              // console.log('Nije prazno')
              // console.log('Niz: ')

              for (let j = 0; j < this.sedistaRez.length; j++) {
                // console.log(this.sedistaRez[j].oznaka)
                // console.log('\n')

                if (this.sediste.id === this.sedistaRez[j].id) {
                  this.sedistaRez.splice(j, 1);
                  // console.log('Vec imaaaaaa ' + this.sediste.oznaka)

                }
              }
            }
          }
      }
    }

    // console.log(this.sediste.oznaka);

    console.log('Rezervisano' + this.sedistaRez);
    this.counter = this.sedistaRez.length;
    console.log(this.counter)

    // this.sedisteService.setterR(this.sedistaRez);

    /*for (let i = 0; i < this.sedista.length; i++) {
      console.log(this.sedistaRez[i].oznaka)}*/

  }

}
