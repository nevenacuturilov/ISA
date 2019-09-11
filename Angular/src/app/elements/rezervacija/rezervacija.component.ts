import { Component, OnInit } from '@angular/core';
import { Sediste } from 'app/models/sediste';
import { SedisteService } from 'app/services/sediste.service';
import { Router } from '@angular/router';
import { AviokompanijaService } from 'app/services/aviokompanija.service';
import { LetService } from 'app/services/let.service';
import { Let } from 'app/models/let';
import { Aviokompanija } from 'app/models/aviokompanija';

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

  private leet: Let;
  private a: Aviokompanija;

  constructor(private sedisteService: SedisteService, private router: Router,
    private aviokompanijaService: AviokompanijaService, private letService: LetService) { }

  ngOnInit() {

    this.leet = this.letService.getter();
    console.log('Inicijalizacija' + this.leet);

    this.a = this.aviokompanijaService.getter();
    console.log('InicijalizacijAAAAAAAAAAAAAAAAAAAAAAaaa' + this.a);

    this.sedistaRez = this.sedisteService.getterR();
    for (let j = 0; j < this.sedistaRez.length; j++) {
      console.log(this.sedistaRez[j].oznaka)
      console.log(this.sedistaRez[j].boja)
      console.log('\n')
    }

    /*this.sedisteService.getSeats().subscribe((seats) => {
      this.sedistaRez = seats;
      console.log('L ' + this.sedistaRez.length)
      console.log('Inicijalizacija' + this.sedistaRez);
    }, (error) => {
      console.log(error);
    });*/

    this.tableData1 = {
      headerRow: [ 'Aviokompanija', 'Let od',  'Let do', 'Oznaka sedista', 'Ime', 'Prezime', 'Broj pasosa'],
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
