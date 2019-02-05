import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/korisnik';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  private korisnici: Korisnik[];
  private k: Korisnik;

  constructor(private korisnikService: KorisnikService, private _router: Router) { }

  ngOnInit() {
    this.k = this.korisnikService.getter();
    console.log('Prijava');
    this.korisnikService.getUsers().subscribe((users) => {
      this.korisnici = users;
    }, (error) => {
      console.log(error);
    });
  }

  prijava() {
    // za undefined slucaj napisati sta se desava i za ne dobro unete podtke
    for (let i = 0; i < this.korisnici.length; i++) {
      console.log(i);
      /*console.log(this.k.username);
      console.log(this.k.password);
      console.log(this.korisnici[i].username);
      console.log(this.korisnici[i].password);
      console.log('/n');*/
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
