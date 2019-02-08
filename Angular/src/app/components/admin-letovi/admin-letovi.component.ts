import { Component, OnInit } from '@angular/core';
import { Let } from 'src/app/models/let';
import { LetService } from 'src/app/services/let.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-letovi',
  templateUrl: './admin-letovi.component.html',
  styleUrls: ['./admin-letovi.component.css']
})
export class AdminLetoviComponent implements OnInit {

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

  delete(l: Let) {
    this.letService.deleteFlight(l.id).subscribe((data) => {
      this.letovi.splice(this.letovi.indexOf(l), 1);
    }, (error) => {
      console.log(error);
    });
  }

  update(l: Let) {
    this.letService.setter(l);
    this.router.navigate(['/admin-home', { outlets: { a: 'admin-uredi-let' } }]);
  }

  add() {
    this.leet = new Let();
    this.letService.setter(this.leet);
    this.router.navigate(['/admin-home', { outlets: { a: 'admin-uredi-let' } }]);
  }

  display(l: Let) {
    this.letService.setter(l);
    this.router.navigate(['/admin-home', { outlets: { a: 'admin-prikazi-let' } }]);
  }

}
