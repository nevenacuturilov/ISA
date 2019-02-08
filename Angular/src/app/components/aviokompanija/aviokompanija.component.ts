import { Component, OnInit } from '@angular/core';
import { Aviokompanija } from 'src/app/models/aviokompanija';
import { AviokompanijaService } from 'src/app/services/aviokompanija.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aviokompanija',
  templateUrl: './aviokompanija.component.html',
  styleUrls: ['./aviokompanija.component.css']
})
export class AviokompanijaComponent implements OnInit {

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
    this.router.navigate(['/home', { outlets: { h: 'aviokompanije' } }]);
  }


}
