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

  constructor(private korisnikService: KorisnikService, private _router: Router) { }

  ngOnInit() {
    console.log('1111');
    this.korisnikService.getUsers().subscribe((users) => {
      console.log('222222');
      console.log(users);
      this.korisnici = users;
    }, (error) => {
      console.log(error);
    });
  }

}
