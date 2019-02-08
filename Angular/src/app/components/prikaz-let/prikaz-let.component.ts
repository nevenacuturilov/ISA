import { Component, OnInit } from '@angular/core';
import { Let } from 'src/app/models/let';
import { LetService } from 'src/app/services/let.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prikaz-let',
  templateUrl: './prikaz-let.component.html',
  styleUrls: ['./prikaz-let.component.css']
})
export class PrikazLetComponent implements OnInit {

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
    this.router.navigate(['/pocetna-stranica', { outlets: { p: 'prikaz-letovi' } }]);
  }

}
