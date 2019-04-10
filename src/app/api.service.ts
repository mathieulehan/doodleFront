import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Employe} from './models/Employe';
import {Sondage} from './models/Sondage';
import {catchError} from 'rxjs/internal/operators/catchError';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // routes
  baseRoute: string;
  employeesRoute: string;
  countRoute: string;
  surveysRoute: string;
  surveysDateRoute: string;
  surveysLocationRoute: string;
  surveysDateLocationRoute: string;
  surveysListRoute: string;

  constructor(private http: HttpClient) {
    this.baseRoute = '/api/';
    // employees
    this.employeesRoute = 'employees/';

    // surveysRoute
    this.surveysRoute = 'surveys/';
    this.surveysDateRoute = 'dateSurveys/';
    this.surveysLocationRoute = 'locationSurveys/';
    this.surveysDateLocationRoute = 'dateLocationSurveys/';
    this.surveysListRoute = 'listSurveys/';

    // operations
    this.countRoute = 'count';
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
  getEmployees() {
    return this.http.get<Employe[]>(`${this.baseRoute + this.employeesRoute}`)
      .pipe(
        catchError(ApiService.handleError)
      );
  }

  /**
   * Get an employee
   */
  getEmploye(id: number): Observable<Employe> {
    return this.http.get<Employe>(`${this.baseRoute + this.employeesRoute + id}`)
      .pipe(
        catchError(ApiService.handleError)
      );
  }

  /**
   * Get the number of registered employees
   */
  getNumberOfEmployees() {
    return this.http.get(this.baseRoute + this.employeesRoute + this.countRoute, {responseType: 'text'})
      .pipe(
        catchError(ApiService.handleError)
      );
  }
  /**
   * Get surveysRoute
   */
  getSurveys(type: string): Observable<Sondage[]> {
    switch (type) {
      case 'all':
        return this.http.get<Sondage[]>(`${this.baseRoute + this.surveysRoute}`)
          .pipe(
            catchError(ApiService.handleError)
          );
      case 'date':
        return this.http.get<Sondage[]>(`${this.baseRoute + this.surveysDateRoute}`)
          .pipe(
            catchError(ApiService.handleError)
          );
      case 'location':
        return this.http.get<Sondage[]>(`${this.baseRoute + this.surveysLocationRoute}`)
          .pipe(
            catchError(ApiService.handleError)
          );
      case 'dateLocation':
        return this.http.get<Sondage[]>(`${this.baseRoute + this.surveysDateLocationRoute}`)
          .pipe(
            catchError(ApiService.handleError)
          );
      case 'list':
        return this.http.get<Sondage[]>(`${this.baseRoute + this.surveysListRoute}`)
          .pipe(
            catchError(ApiService.handleError)
          );
    }
  }

  /**
   * Get a survey by its id
   * @param id : survey's id
   */
  getSurvey(id: number) {
    return this.http.get<Sondage>(`${this.baseRoute + this.surveysRoute + id}`)
      .pipe(
        catchError(ApiService.handleError)
      );
  }

  /**
   * Get the number of created surveysRoute
   */
  getNumberOfSurveys(type: string) {
    switch (type) {
      case 'all':
        return this.http.get(this.baseRoute + this.surveysRoute + this.countRoute, {responseType: 'text'})
          .pipe(
            catchError(ApiService.handleError)
          );
      case 'date':
        return this.http.get(this.baseRoute + this.surveysDateRoute + this.countRoute, {responseType: 'text'})
          .pipe(
            catchError(ApiService.handleError)
          );
      case 'location':
        return this.http.get(this.baseRoute + this.surveysLocationRoute + this.countRoute, {responseType: 'text'})
          .pipe(
            catchError(ApiService.handleError)
          );
      case 'dateLocation':
        return this.http.get(this.baseRoute + this.surveysDateLocationRoute + this.countRoute, {responseType: 'text'})
          .pipe(
            catchError(ApiService.handleError)
          );
      case 'list':
        return this.http.get(this.baseRoute + this.surveysListRoute + this.countRoute, {responseType: 'text'})
          .pipe(
            catchError(ApiService.handleError)
          );
    }
  }
}

