import { Component, OnInit } from '@angular/core';
import { Let } from 'app/models/let';
import { LetService } from 'app/services/let.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aa-let-uredi',
  templateUrl: './aa-let-uredi.component.html',
  styleUrls: ['./aa-let-uredi.component.scss']
})
export class AaLetUrediComponent implements OnInit {

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

  save() {

    // Add

    if (this.l.id === undefined) {
      this.letService.createFlight(this.l).subscribe((flight) => {
        this.router.navigate(['/aa-letovi']);
      },
        (error) => {
          console.log(error);
        });
    } else {

      // Edit

      this.letService.updateFlight(this.l).subscribe((flight) => {
        this.router.navigate(['/aa-letovi']);
      }, (error) => {
        console.log(error);
      });
    }
  }


}
