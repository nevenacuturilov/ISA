import { Component, OnInit } from '@angular/core';
import { Let } from 'app/models/let';
import { LetService } from 'app/services/let.service';
import { Router } from '@angular/router';
import { AviokompanijaService } from 'app/services/aviokompanija.service';
import { Aviokompanija } from 'app/models/aviokompanija';

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

  private a: Aviokompanija;


  constructor(private letService: LetService, private aviokompanijaService: AviokompanijaService, private router: Router) {
  }

  ngOnInit() {
    this.leet = this.letService.getter();
    this.a = this.aviokompanijaService.getter()

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

  ll() {
    console.log('KLIK');
  }

  jos() {
    console.log('JOS');
  }

  display(l: Let) {
    this.letService.setter(l);
    this.router.navigate(['/let']);
  }

  r(l: Let) {
    this.aviokompanijaService.setter(this.a);
    this.letService.setter(l);
    this.router.navigate(['/rezervisi']);
  }

}
