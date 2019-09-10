import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Sediste } from 'app/models/sediste';

@Injectable({
  providedIn: 'root'
})
export class SedisteService {

  private url = 'http://localhost:8080/s';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private sediste = new Sediste();
  private sedistaRez = new Array<Sediste>();


  constructor(private http: Http) { }

  setter(sediste: Sediste) {
    this.sediste = sediste;
  }

  getter() {
    return this.sediste;
  }

  setterR(sediste: Sediste[]) {
    this.sedistaRez = sediste;
  }

  getterR() {
    return this.sedistaRez;
  }

  getSeats() {
    return this.http.get(this.url + '/sedista', this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  getSeat(id: Number) {
    return this.http.get(this.url + '/sediste/' + id, this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  deleteSeat(id: Number) {
    return this.http.delete(this.url + '/sediste/' + id, this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  createSeat(sediste: Sediste) {
    return this.http.post(this.url + '/sediste', JSON.stringify(sediste), this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  updateSeat(sediste: Sediste) {
    return this.http.put(this.url + '/sediste', JSON.stringify(sediste), this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: Response) {
    return throwError(error || 'SERVER ERROR');
  }
}
