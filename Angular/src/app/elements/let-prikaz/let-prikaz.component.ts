import { Component, OnInit } from '@angular/core';
import { Let } from 'app/models/let';
import { LetService } from 'app/services/let.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-let-prikaz',
  templateUrl: './let-prikaz.component.html',
  styleUrls: ['./let-prikaz.component.scss']
})
export class LetPrikazComponent implements OnInit {

  private letovi: Let[];
  private l: Let;

  constructor(private letService: LetService, private router: Router) {
  }
  ngOnInit() {
    this.l = this.letService.getter();

    this.letService.getFlights().subscribe((flight) => {
      this.letovi = flight;
    }, (error) => {
      console.log(error);
    });
  }

  back() {
    this.router.navigate(['/prikaz-letovi']);
  }

  rez() {
  }

}
