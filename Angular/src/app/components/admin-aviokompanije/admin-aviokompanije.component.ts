import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AviokompanijaService } from 'src/app/services/aviokompanija.service';
import { Aviokompanija } from 'src/app/models/aviokompanija';

@Component({
  selector: 'app-admin-aviokompanije',
  templateUrl: './admin-aviokompanije.component.html',
  styleUrls: ['./admin-aviokompanije.component.css']
})
export class AdminAviokompanijeComponent implements OnInit {

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

  delete(aviokompanija: Aviokompanija) {
    this.aviokompanijaService.deleteAirline(aviokompanija.id).subscribe((data) => {
      this.aviokompanije.splice(this.aviokompanije.indexOf(aviokompanija), 1);
    }, (error) => {
      console.log(error);
    });
  }

  update(aviokompanija: Aviokompanija) {
    this.aviokompanijaService.setter(aviokompanija);
    this.router.navigate(['/admin-home', { outlets: { a: 'admin-uredi-aviokompaniju' } }]);
  }

  add() {
    this.a = new Aviokompanija();
    this.aviokompanijaService.setter(this.a);
    this.router.navigate(['/admin-home', { outlets: { a: 'admin-uredi-aviokompaniju' } }]);
  }

  display(aviokompanija: Aviokompanija) {
    this.aviokompanijaService.setter(aviokompanija);
    this.router.navigate(['/admin-home', { outlets: { a: 'admin-prikazi-aviokompaniju' } }]);
  }

}
