import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/models/korisnik';
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

  constructor(private korisnikService: KorisnikService, private router: Router) { }

  ngOnInit() {
    this.k = this.korisnikService.getter();

    this.korisnikService.getUsers().subscribe((users) => {
      this.korisnici = users;
    }, (error) => {
      console.log(error);
    });
  }

  prijava() {
    // za undefined slucaj napisati sta se desava i za ne dobro unete podtke
    if (this.k.username === undefined) {
      console.log('nije definisan');
      this.router.navigate(['/pocetna-stranica']);
      /*this.korisnikService.createUser(this.k).subscribe((k) => {
      console.log('nije definisan');
      this.router.navigate(['/pocetna-stranica']);
      }, (error) => {
        console.log(error);
      });*/
    } else {
      for (let i = 0; i < this.korisnici.length; i++) {
        if (this.k.username === this.korisnici[i].username) {
          if (this.k.password === this.korisnici[i].password) {
            // for (let i = 0; i < this.korisnici.length; i++) {
            // if (this.k.username === this.korisnici[i].username) {
            this.k = this.korisnici[i];
            this.korisnikService.setter(this.k);
            // }
            // }
            this.router.navigate(['/home']);
          }
        }
      }
    }
  }
}
