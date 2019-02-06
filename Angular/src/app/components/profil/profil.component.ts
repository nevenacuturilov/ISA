import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/models/korisnik';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  private korisnici: Korisnik[];
  private korisnik: Korisnik;

  constructor(private korisnikService: KorisnikService, private router: Router) { }

  ngOnInit() {
    this.korisnik = this.korisnikService.getter();
    console.log('init-profil');
    console.log(this.korisnik);
    this.korisnikService.getUsers().subscribe((users) => {
      this.korisnici = users;
    }, (error) => {
      console.log(error);
    });
  }

  edit() {
    this.router.navigate(['/home', { outlets: { pro: 'urediProfil' } }]);
    console.log('edit');
    console.log(this.korisnik);
  }

}
