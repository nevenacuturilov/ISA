import { Component, OnInit } from '@angular/core';
import { Let } from 'app/models/let';
import { LetService } from 'app/services/let.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-atina',
  templateUrl: './atina.component.html',
  styleUrls: ['./atina.component.scss']
})
export class AtinaComponent implements OnInit {

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

}
