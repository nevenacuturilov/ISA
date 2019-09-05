import { Component, OnInit } from '@angular/core';
import { Let } from 'app/models/let';
import { LetService } from 'app/services/let.service';
import { Router } from '@angular/router';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-letovi',
  templateUrl: './letovi.component.html',
  styleUrls: ['./letovi.component.scss']
})
export class LetoviComponent implements OnInit {

  private letovi: Let[];
  private leet: Let;
  public tableData1: TableData;
  public tableData2: TableData;

  constructor(private letService: LetService, private router: Router) {
  }

  ngOnInit() {
    this.letService.getFlights().subscribe((flight) => {
      this.letovi = flight;
    }, (error) => {
      console.log(error);
    });

    this.tableData1 = {
      headerRow: [ 'Mesto poletanja', 'Mesto sletanja', 'Operacije'/*, 'City', 'Salary'*/],
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

  display(l: Let) {
    this.letService.setter(l);
    this.router.navigate(['/let']);
  }


}
