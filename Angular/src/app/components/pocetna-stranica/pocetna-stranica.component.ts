import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/korisnik';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pocetna-stranica',
  templateUrl: './pocetna-stranica.component.html',
  styleUrls: ['./pocetna-stranica.component.css']
})
export class PocetnaStranicaComponent implements OnInit {
  private korisnici: Korisnik[];
  private k: Korisnik;

  constructor(private korisnikService: KorisnikService, private _router: Router) { }

  ngOnInit() {
    this.k = this.korisnikService.getter();
    // console.log('ovo');
    this.korisnikService.getUsers().subscribe((users) => {
      console.log('Korisnici:');
      console.log(users);
      this.korisnici = users;
    }, (error) => {
      console.log(error);
    });
  }

  prijava() {
    for (let i = 0; i < this.korisnici.length; i++) {
      console.log(i);
      console.log(this.k.username);
      console.log(this.k.password);
      console.log(this.korisnici[i].username);
      console.log(this.korisnici[i].password);
      console.log('/n');

      if (this.k.username === this.korisnici[i].username) {
        console.log('username');
        if (this.k.password === this.korisnici[i].password) {
          console.log('password');
          this._router.navigate(['/profil']);
        }
      }
  }

  }

}
