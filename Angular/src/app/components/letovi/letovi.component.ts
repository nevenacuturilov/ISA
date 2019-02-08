import { Component, OnInit } from '@angular/core';
import { Let } from 'src/app/models/let';
import { LetService } from 'src/app/services/let.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letovi',
  templateUrl: './letovi.component.html',
  styleUrls: ['./letovi.component.css']
})
export class LetoviComponent implements OnInit {

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
    this.router.navigate(['/home', { outlets: { h: 'let' } }]);
  }

}
