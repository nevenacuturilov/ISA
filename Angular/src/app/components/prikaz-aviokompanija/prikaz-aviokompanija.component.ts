import { Component, OnInit } from '@angular/core';
import { Aviokompanija } from 'src/app/models/aviokompanija';
import { AviokompanijaService } from 'src/app/services/aviokompanija.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prikaz-aviokompanija',
  templateUrl: './prikaz-aviokompanija.component.html',
  styleUrls: ['./prikaz-aviokompanija.component.css']
})
export class PrikazAviokompanijaComponent implements OnInit {

  private aviokompanije: Aviokompanija[];
  private aviokompanija: Aviokompanija;

  constructor(private aviokompanijaService: AviokompanijaService, private router: Router) { }

  ngOnInit() {
    this.aviokompanija = this.aviokompanijaService.getter();

    this.aviokompanijaService.getAirlines().subscribe((airlines) => {
      this.aviokompanije = airlines;
    }, (error) => {
      console.log(error);
    });
  }

  back() {
    this.router.navigate(['/pocetna-stranica', { outlets: { p: 'prikaz-aviokompanije' } }]);
  }

}
