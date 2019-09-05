import { Component, OnInit } from '@angular/core';

import { Korisnik } from 'app/models/korisnik';
import { KorisnikService } from 'app/services/korisnik.service';
import { Router } from '@angular/router';
import { AdministratorAviokompanije } from 'app/models/administrator-aviokompanije';
import { AdministratorAviokompanijeService } from 'app/services/administrator-aviokompanije.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.scss']
})
export class RegistracijaComponent implements OnInit {

  private korisnici: Korisnik[];
  private korisnik: Korisnik;

  private admini: AdministratorAviokompanije[];
  private admin: AdministratorAviokompanije;

  constructor(private korisnikService: KorisnikService,
  private adminService: AdministratorAviokompanijeService, private router: Router) { }

  ngOnInit() {
    this.korisnik = this.korisnikService.getter();
    this.admin = this.adminService.getter();

    this.korisnikService.getUsers().subscribe((users) => {
      this.korisnici = users;
      // console.log('inicijalizacija ' + this.korisnici);
    }, (error) => {
      console.log(error);
    });

    this.adminService.getAdmins().subscribe((administrators) => {
      this.admini = administrators;
      // console.log('inicijalizacija ' + this.admini);
    }, (error) => {
      console.log(error);
    });
  }

  reg() {
    console.log('regstracija');
  }
}
