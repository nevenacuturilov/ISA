import { Component, OnInit } from '@angular/core';
import { Sediste } from 'app/models/sediste';
import { SedisteService } from 'app/services/sediste.service';
import { Router } from '@angular/router';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-rezervacija',
  templateUrl: './rezervacija.component.html',
  styleUrls: ['./rezervacija.component.scss']
})
export class RezervacijaComponent implements OnInit {

  private sedistaRez: Sediste[];
  private sediste: Sediste;

  public tableData1: TableData;


  constructor(private sedisteService: SedisteService, private router: Router) { }

  ngOnInit() {

    this.sedistaRez = this.sedisteService.getterR();

    this.sedisteService.getSeats().subscribe((seats) => {
      this.sedistaRez = seats;
      // console.log('L ' + this.sedista.length);
      // console.log('Inicijalizacija' + seats);
    }, (error) => {
      console.log(error);
    });

    this.tableData1 = {
      headerRow: [ 'Aviokompanija', 'Let', 'Oznaka sedista', 'Ime', 'Prezime', 'Broj pasosa'],
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

}
