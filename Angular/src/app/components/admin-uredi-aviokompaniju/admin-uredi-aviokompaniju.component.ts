import { Component, OnInit } from '@angular/core';
import { Aviokompanija } from 'src/app/models/aviokompanija';
import { AviokompanijaService } from 'src/app/services/aviokompanija.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-uredi-aviokompaniju',
  templateUrl: './admin-uredi-aviokompaniju.component.html',
  styleUrls: ['./admin-uredi-aviokompaniju.component.css']
})
export class AdminUrediAviokompanijuComponent implements OnInit {

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

  save() {
    this.aviokompanijaService.setter(this.aviokompanija);
  }

}
