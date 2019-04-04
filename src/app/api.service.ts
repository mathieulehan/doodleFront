import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Employe} from './models/Employe';
import {catchError} from 'rxjs/internal/operators/catchError';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string;
  urlEmployees: string;
  count: string;

  constructor(private http: HttpClient) {
    this.url = 'localhost:9090/rest/';
    this.urlEmployees = 'employees/';
    this.count = 'count';
  }

  private static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  /**
   * Get the list of employees
   */
  getEmployees(): Observable<Employe[]> {
    return this.http.get<Employe[]>(`${this.url + this.urlEmployees}`)
      .pipe(
        catchError(ApiService.handleError)
      );
  }

  /**
   * Get an employee
   */
  getEmploye(id: number): Observable<Employe> {
    return this.http.get<Employe>(`${this.url + this.urlEmployees + id}`)
      .pipe(
        catchError(ApiService.handleError)
      );
  }

  getNumberOfEmployees() {
    return this.http.get(this.url + this.urlEmployees + this.count, {responseType: 'text'})
      .pipe(
        catchError(ApiService.handleError)
      );
  }
}
