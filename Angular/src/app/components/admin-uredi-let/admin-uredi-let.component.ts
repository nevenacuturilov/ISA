import { Component, OnInit } from '@angular/core';
import { Let } from 'src/app/models/let';
import { LetService } from 'src/app/services/let.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-uredi-let',
  templateUrl: './admin-uredi-let.component.html',
  styleUrls: ['./admin-uredi-let.component.css']
})
export class AdminUrediLetComponent implements OnInit {

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
        this.router.navigate(['/admin-home', { outlets: { a: 'admin-letovi' } }]);
      },
        (error) => {
          console.log(error);
        });
    } else {

      // Edit

      this.letService.updateFlight(this.l).subscribe((flight) => {
        this.router.navigate(['/admin-home', { outlets: { a: 'admin-letovi' } }]);
      }, (error) => {
        console.log(error);
      });
    }
  }

}
