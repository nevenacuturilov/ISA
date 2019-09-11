import { Component, OnInit } from '@angular/core';
import { Aviokompanija } from 'app/models/aviokompanija';
import { AviokompanijaService } from 'app/services/aviokompanija.service';
import { Router } from '@angular/router';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-aa-aviokompanije',
  templateUrl: './aa-aviokompanije.component.html',
  styleUrls: ['./aa-aviokompanije.component.scss']
})
export class AaAviokompanijeComponent implements OnInit {

  public tableData1: TableData;

  private aviokompanije: Aviokompanija[];
  private a: Aviokompanija;

  constructor(private aviokompanijaService: AviokompanijaService, private router: Router) {
  }

  ngOnInit() {
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
  }

  delete(aviokompanija: Aviokompanija) {
    this.aviokompanijaService.deleteAirline(aviokompanija.id).subscribe((data) => {
      this.aviokompanije.splice(this.aviokompanije.indexOf(aviokompanija), 1);
    }, (error) => {
      console.log(error);
    });
  }

  update(aviokompanija: Aviokompanija) {
    this.aviokompanijaService.setter(aviokompanija);
    this.router.navigate(['/aa-aviokompanija-uredi']);
  }

  add() {
    this.a = new Aviokompanija();
    this.aviokompanijaService.setter(this.a);
    this.router.navigate(['/aa-aviokompanija-uredi']);
  }

  display(aviokompanija: Aviokompanija) {
    this.aviokompanijaService.setter(aviokompanija);
    this.router.navigate(['/aa-aviokompanija']);
  }

}
