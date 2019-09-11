import { Component, OnInit } from '@angular/core';
import { Aviokompanija } from 'app/models/aviokompanija';
import { AviokompanijaService } from 'app/services/aviokompanija.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aa-aviokompanija-uredi',
  templateUrl: './aa-aviokompanija-uredi.component.html',
  styleUrls: ['./aa-aviokompanija-uredi.component.scss']
})
export class AaAviokompanijaUrediComponent implements OnInit {

  private aviokompanije: Aviokompanija[];
  private a: Aviokompanija;

  constructor(private aviokompanijaService: AviokompanijaService, private router: Router) { }

  ngOnInit() {
    this.a = this.aviokompanijaService.getter();

    this.aviokompanijaService.getAirlines().subscribe((airlines) => {
      this.aviokompanije = airlines;
    }, (error) => {
      console.log(error);
    });
  }

  save() {

    // Add

    if (this.a.id === undefined) {
      this.aviokompanijaService.createAirline(this.a).subscribe((airline) => {
        this.router.navigate(['/aa-aviokompanije']);
      }, (error) => {
        console.log(error);
      });
    } else {

      // Edit

      this.aviokompanijaService.updateAirline(this.a).subscribe((airline) => {
        this.router.navigate(['/aa-aviokompanije']);
      }, (error) => {
        console.log(error);
      });
    }
  }

}
