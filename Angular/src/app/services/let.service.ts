import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Let } from '../models/let';

@Injectable({
  providedIn: 'root'
})
export class LetService {

  private url = 'http://localhost:8080/l';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private leet = new Let();

  constructor(private http: Http) {
  }

  setter(leet: Let) {
    this.leet = leet;
  }

  getter() {
    return this.leet;
  }

  getFlights() {
    return this.http.get(this.url + '/letovi', this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }
  getFlight(id: Number) {
    return this.http.get(this.url + '/let/' + id, this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  deleteFlight(id: Number) {
    return this.http.delete(this.url + '/let/' + id, this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  createFlight(leet: Let) {
    return this.http.post(this.url + '/let', JSON.stringify(leet), this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  updateFlight(leet: Let) {
    return this.http.put(this.url + '/let', JSON.stringify(leet), this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: Response) {
    return throwError(error || 'SERVER ERROR');
  }

}
