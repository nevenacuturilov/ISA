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
    console.log('EMAIL' + this.korisnik.email);

    this.korisnikService.getUsers().subscribe((users) => {
      this.korisnici = users;
    }, (error) => {
      console.log(error);
    });
  }

  save() {
    this.korisnikService.updateUser(this.korisnik).subscribe((user) => {
      this.router.navigate(['/korisnik-profil']);
    },
      (error) => {
        console.log(error);
      });
  }

}
