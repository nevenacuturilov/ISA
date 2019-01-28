import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { Korisnik } from '../korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  private url = 'http://localhost:8080/api';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});
  private korisnik = new Korisnik();

  constructor(private http: Http) { }

  setter(korisnik: Korisnik) {
    this.korisnik = korisnik;
  }

  getter() {
    return this.korisnik;
  }

  getUsers() {
    return this.http.get(this.url + '/users', this.options)
      .pipe(map((response: Response) => response.json()))
        .pipe(catchError(this.errorHandler));
  }
  getUser(id: Number) {
    return this.http.get(this.url + '/user/' + id, this.options)
      .pipe(map((response: Response) => response.json()))
        .pipe(catchError(this.errorHandler));
  }

  deleteUser(id: Number) {
    return this.http.delete(this.url + '/user/' + id, this.options)
      .pipe(map((response: Response) => response.json()))
        .pipe(catchError(this.errorHandler));
  }

  createUser(korisnik: Korisnik) {
    return this.http.post(this.url + '/user', JSON.stringify(korisnik), this.options)
      .pipe(map((response: Response) => response.json()))
        .pipe(catchError(this.errorHandler));
  }

   updateUser(korisnik: Korisnik) {
    return this.http.put(this.url + '/user', JSON.stringify(korisnik), this.options)
    .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: Response) {
     return Observable.throw(error || 'SERVER ERROR');
  }

}
