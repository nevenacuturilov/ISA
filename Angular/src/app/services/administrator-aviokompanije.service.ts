import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { AdministratorAviokompanije } from '../models/administrator-aviokompanije';

@Injectable({
  providedIn: 'root'
})
export class AdministratorAviokompanijeService {

  private url = 'http://localhost:8080/aa';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private admin = new AdministratorAviokompanije();

  constructor(private http: Http) {
  }

  setter(admin: AdministratorAviokompanije) {
    this.admin = admin;
  }

  getter() {
    return this.admin;
  }

  getAdmins() {
    return this.http.get(this.url + '/administratoriAviokompanije', this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  getAdmin(id: Number) {
    return this.http.get(this.url + '/administratorAviokompanije/' + id, this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  deleteAdmin(id: Number) {
    return this.http.delete(this.url + '/administratorAviokompanije/' + id, this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  createAdmin(admin: AdministratorAviokompanije) {
    return this.http.post(this.url + '/administratorAviokompanije', JSON.stringify(admin), this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  updateAdmin(admin: AdministratorAviokompanije) {
    return this.http.put(this.url + '/administratorAviokompanije', JSON.stringify(admin), this.options)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: Response) {
    return throwError(error || 'SERVER ERROR');
  }
}
