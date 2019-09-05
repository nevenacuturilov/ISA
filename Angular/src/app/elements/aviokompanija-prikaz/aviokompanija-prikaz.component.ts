import { Component, OnInit } from '@angular/core';
import { Aviokompanija } from 'app/models/aviokompanija';
import { AviokompanijaService } from 'app/services/aviokompanija.service';
import { Router } from '@angular/router';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-aviokompanija-prikaz',
  templateUrl: './aviokompanija-prikaz.component.html',
  styleUrls: ['./aviokompanija-prikaz.component.scss']
})
export class AviokompanijaPrikazComponent implements OnInit {

  private aviokompanije: Aviokompanija[];
  private aviokompanija: Aviokompanija;
  public tableData1: TableData;
  public tableData2: string[];

  constructor(private aviokompanijaService: AviokompanijaService, private router: Router) { }

  ngOnInit() {
    this.aviokompanija = this.aviokompanijaService.getter();

    this.aviokompanijaService.getAirlines().subscribe((airlines) => {
      this.aviokompanije = airlines;
    }, (error) => {
      console.log(error);
    });

    this.tableData1 = {
      headerRow: [ 'Naziv', 'Operacije'/*, 'Country', 'City', 'Salary'*/],
      dataRows: [
          ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
          ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
          ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
          ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
          ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
          ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
      ]
    };

    this.tableData2 = ['lala', 'opaopa']
  }

  back() {
    this.router.navigate(['/pocetna-stranica']);
  }

}
