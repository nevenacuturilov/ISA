import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/models/korisnik';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { Router } from '@angular/router';
import { AdministratorAviokompanije } from 'src/app/models/administratorAviokompanije';
import { AdministratorAviokompanijeService } from 'src/app/services/administrator-aviokompanije.service';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

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
      // console.log('init ' + this.korisnici);
    }, (error) => {
      console.log(error);
    });

    this.adminService.getAdmins().subscribe((administrators) => {
      this.admini = administrators;
      console.log('init ' + this.admini);
    }, (error) => {
      console.log(error);
    });
  }

  login() {
    console.log(this.korisnici);
    console.log(this.admini);

    if (this.korisnik.username === undefined) {
      this.router.navigate(['/pocetna-stranica']);
    } else {

      // Korisnici

      for (let i = 0; i < this.korisnici.length; i++) {
        if (this.korisnik.username === this.korisnici[i].username && this.korisnik.password === this.korisnici[i].password) {

          this.korisnik = this.korisnici[i];
          this.korisnikService.setter(this.korisnik);
          console.log('login ' + this.korisnik);
          this.router.navigate(['/home']);
        } else {

          // Administratori

          for (let j = 0; j < this.admini.length; j++) {
            if (this.korisnik.username === this.admini[j].username && this.korisnik.password === this.admini[j].password) {
              this.admin = this.admini[j];

              this.adminService.setter(this.admin);
              console.log(this.adminService.getter());
              console.log('login ' + this.admin);
              this.router.navigate(['/admin-home']);
            }
          }
        }
      }
    }
  }
}
