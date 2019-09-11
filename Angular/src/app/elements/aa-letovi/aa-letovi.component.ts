import { Component, OnInit } from '@angular/core';
import { Let } from 'app/models/let';
import { LetService } from 'app/services/let.service';
import { Router } from '@angular/router';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}


@Component({
  selector: 'app-aa-letovi',
  templateUrl: './aa-letovi.component.html',
  styleUrls: ['./aa-letovi.component.scss']
})
export class AaLetoviComponent implements OnInit {

  public tableData1: TableData;

  private letovi: Let[];
  private leet: Let;

  constructor(private letService: LetService, private router: Router) { }

  ngOnInit() {
    this.leet = this.letService.getter();

    this.letService.getFlights().subscribe((flight) => {
      this.letovi = flight;
      console.log(this.letovi);
    }, (error) => {
      console.log(error);
    });


    this.tableData1 = {
      headerRow: [ 'Mesto poletanja', 'Mesto sletanja', 'Datum poletanja', 'Datum sletanja'/*, 'Salary'*/],
      dataRows: [
          ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
          ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
          ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
          ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
          ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
          ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
      ]
  };

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
    this.router.navigate(['/aa-let-uredi']);
  }

  add() {
    this.leet = new Let();
    this.letService.setter(this.leet);
    this.router.navigate(['/aa-let-uredi']);
  }

  display(l: Let) {
    this.letService.setter(l);
    this.router.navigate(['/aa-let']);
  }


}
