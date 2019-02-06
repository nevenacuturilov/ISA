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

  save() {
    this.router.navigate(['/home', { outlets: { pro: 'profil' } }]);
    this.korisnikService.setter(this.k);
    console.log('save');
    console.log(this.k);
  }

}
