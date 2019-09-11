import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Korisnik } from 'app/models/korisnik';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private url = 'http://localhost:8080/m';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private korisnik = new Korisnik();

  private k1 = new Array<Korisnik>();
  private k2 = new Array<Korisnik>();

  private niz: Korisnik[] = [];

  private n = [];


  constructor(private http: Http) {
  }

  setter(korisnik: Korisnik) {
    this.korisnik = korisnik;
  }

  getter() {
    return this.korisnik;
  }

  notifyUser(za: Korisnik/*, od: Korisnik*/) {

    // this.n.push((za));
    // this.n.push((od));

    console.log('NNNNNNNNNNNNNNNN' + this.n);

    return this.http.post(this.url + '/notifay', JSON.stringify(za), this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: Response) {
    return throwError(error || 'SERVER ERROR');
  }
}
