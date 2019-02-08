import { Component, OnInit } from '@angular/core';
import { Aviokompanija } from 'src/app/models/aviokompanija';
import { AviokompanijaService } from 'src/app/services/aviokompanija.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aviokompanije',
  templateUrl: './aviokompanije.component.html',
  styleUrls: ['./aviokompanije.component.css']
})
export class AviokompanijeComponent implements OnInit {

  private aviokompanije: Aviokompanija[];
  private a: Aviokompanija;

  constructor(private aviokompanijaService: AviokompanijaService, private router: Router) {
  }

  ngOnInit() {
    /*this.a = this.aviokompanijaService.getter();
    console.log(this.a);*/

    this.aviokompanijaService.getAirlines().subscribe((airlines) => {
      this.aviokompanije = airlines;
    }, (error) => {
      console.log(error);
    });
  }

  display(aviokompanija: Aviokompanija) {
    this.aviokompanijaService.setter(aviokompanija);
    this.router.navigate(['/home', { outlets: { h: 'aviokompanija' } }]);
  }
}
