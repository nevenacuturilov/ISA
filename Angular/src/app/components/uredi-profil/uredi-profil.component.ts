import { Component, OnInit } from '@angular/core';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { Router } from '@angular/router';
import { Korisnik } from 'src/app/models/korisnik';

@Component({
  selector: 'app-uredi-profil',
  templateUrl: './uredi-profil.component.html',
  styleUrls: ['./uredi-profil.component.css']
})
export class UrediProfilComponent implements OnInit {

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

  save() {
    this.korisnikService.setter(this.korisnik);
    this.router.navigate(['/home', { outlets: { h: 'profil' } }]);
  }

}
