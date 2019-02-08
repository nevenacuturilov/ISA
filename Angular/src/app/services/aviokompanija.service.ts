import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Aviokompanija } from '../models/aviokompanija';

@Injectable({
  providedIn: 'root'
})
export class AviokompanijaService {

  private url = 'http://localhost:8080/a';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private aviokompanija = new Aviokompanija();

  constructor(private http: Http) {
  }

  setter(aviokompanija: Aviokompanija) {
    this.aviokompanija = aviokompanija;
  }

  getter() {
    return this.aviokompanija;
  }

  getAirlines() {
    return this.http.get(this.url + '/aviokompanije', this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }
  getAirline(id: Number) {
    return this.http.get(this.url + '/aviokompanija/' + id, this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  deleteAirline(id: Number) {
    return this.http.delete(this.url + '/aviokompanija/' + id, this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  createAirline(aviokompanija: Aviokompanija) {
    return this.http.post(this.url + '/aviokompanija', JSON.stringify(aviokompanija), this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  updateAirline(aviokompanija: Aviokompanija) {
    return this.http.put(this.url + '/aviokompanija', JSON.stringify(aviokompanija), this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: Response) {
    return throwError(error || 'SERVER ERROR');
  }

}
