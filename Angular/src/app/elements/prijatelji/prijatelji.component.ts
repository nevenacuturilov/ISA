import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'app/models/korisnik';
import { KorisnikService } from 'app/services/korisnik.service';
import { Router } from '@angular/router';
import { MailService } from 'app/services/mail.service';

declare interface TableData {
  headerRow: string[];
}

@Component({
  selector: 'app-prijatelji',
  templateUrl: './prijatelji.component.html',
  styleUrls: ['./prijatelji.component.scss']
})
export class PrijateljiComponent implements OnInit {

  private korisnici: Korisnik[] = [];
  private korisnici0: Korisnik[] = [];
  private korisnik: Korisnik;
  private aktivan: Korisnik;

  public tableData1 = [];

  constructor(private korisnikService: KorisnikService, private mailService: MailService, private router: Router) { }

  ngOnInit() {
    this.korisnik = this.korisnikService.getter();

    console.log('UL ' + this.korisnik.email);


    this.korisnikService.getUsers().subscribe((users) => {
      this.korisnici0 = users;
      console.log('L0 ' + this.korisnici0.length);
      console.log('inicijalizacija0 ' + this.korisnici0);

      for (let i = 0; i < this.korisnici0.length; i++) {
        if (this.korisnik.id !== this.korisnici0[i].id) {
          this.korisnici.push(this.korisnici0[i]);
        }
      }

    }, (error) => {
      console.log(error);
    });

    console.log('L 1 ' + this.korisnici.length);
    console.log('inicijalizacija 1 ' + this.korisnici);


    this.tableData1 = [ 'Ime', 'Prezime', '', /*'Ime', 'Prezime', 'Broj pasosa'*/]

  }

  addFrend(korisnik: Korisnik) {
    /*for (let i = 0; i < this.korisnici.length; i++) {
        if (this.korisnici[i].aktivan === true) {
          this.aktivan = this.korisnici[i];
        }
    }*/

    console.log('add');
    console.log(korisnik.email);

    this.korisnikService.updateUser(korisnik).subscribe((flight) => {
    }, (error) => {
      console.log(error);
    });

    // this.mailService.notifyUser(korisnik)
  }

}
