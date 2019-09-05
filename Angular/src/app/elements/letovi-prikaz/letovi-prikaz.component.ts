import { Component, OnInit } from '@angular/core';
import { Let } from 'app/models/let';
import { LetService } from 'app/services/let.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letovi-prikaz',
  templateUrl: './letovi-prikaz.component.html',
  styleUrls: ['./letovi-prikaz.component.scss']
})
export class LetoviPrikazComponent implements OnInit {

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
    this.router.navigate(['/prikaz-let']);
  }


}
