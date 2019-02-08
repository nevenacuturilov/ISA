import { Component, OnInit } from '@angular/core';
import { Aviokompanija } from 'src/app/models/aviokompanija';
import { AviokompanijaService } from 'src/app/services/aviokompanija.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prikaz-aviokompanije',
  templateUrl: './prikaz-aviokompanije.component.html',
  styleUrls: ['./prikaz-aviokompanije.component.css']
})
export class PrikazAviokompanijeComponent implements OnInit {

  private aviokompanije: Aviokompanija[];
  private a: Aviokompanija;

  constructor(private aviokompanijaService: AviokompanijaService, private router: Router) {
  }

  ngOnInit() {
    this.aviokompanijaService.getAirlines().subscribe((airlines) => {
      this.aviokompanije = airlines;
    }, (error) => {
      console.log(error);
    });
  }

  display(aviokompanija: Aviokompanija) {
    this.aviokompanijaService.setter(aviokompanija);
    this.router.navigate(['/pocetna-stranica', { outlets: { p: 'prikaz-aviokompanija' } }]);
  }

}
