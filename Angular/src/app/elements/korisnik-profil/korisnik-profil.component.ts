import { Component, OnInit } from '@angular/core';

import { Korisnik } from 'app/models/korisnik';
import { KorisnikService } from 'app/services/korisnik.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-korisnik-profil',
  templateUrl: './korisnik-profil.component.html',
  styleUrls: ['./korisnik-profil.component.scss']
})
export class KorisnikProfilComponent implements OnInit {

  private korisnici: Korisnik[];
  private korisnik: Korisnik;

  constructor(private korisnikService: KorisnikService, private router: Router) { }

  ngOnInit() {
    this.korisnik = this.korisnikService.getter();

    this.korisnikService.getUsers().subscribe((users) => {
      this.korisnici = users;
    }, (error) => {
      console.log(error);
    });
  }

  edit() {
    /*this.korisnikService.setter(this.korisnik);
    console.log('edit' + this.korisnik);*/
    this.router.navigate(['/home', { outlets: { h: 'uredi-profil' } }]);
  }

}
