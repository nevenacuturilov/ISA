import { Component, OnInit } from '@angular/core';
import { Let } from 'src/app/models/let';
import { LetService } from 'src/app/services/let.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prikaz-letovi',
  templateUrl: './prikaz-letovi.component.html',
  styleUrls: ['./prikaz-letovi.component.css']
})
export class PrikazLetoviComponent implements OnInit {

  private letovi: Let[];
  private leet: Let;

  constructor(private letService: LetService, private router: Router) {
  }

  ngOnInit() {
    this.letService.getFlights().subscribe((flight) => {
      this.letovi = flight;
    }, (error) => {
      console.log(error);
    });
  }

  display(l: Let) {
    this.letService.setter(l);
    this.router.navigate(['/pocetna-stranica', { outlets: { p: 'prikaz-let' } }]);
  }

}
