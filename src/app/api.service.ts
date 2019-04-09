import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Employe} from './models/Employe';
import {catchError} from 'rxjs/internal/operators/catchError';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Sondage} from './models/Sondage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string;
  urlEmployees: string;
  count: string;
  surveys: string;
  surveysDate: string;
  surveysLocation: string;
  surveysDateLocation: string;
  surveysList: string;

  constructor(private http: HttpClient) {
    this.url = '/api/';
    // employees
    this.urlEmployees = 'employees/';

    // surveys
    this.surveys = 'surveys/';
    this.surveysDate = 'dateSurveys/';
    this.surveysLocation = 'locationSurveys/';
    this.surveysDateLocation = 'dateLocationSurveys/';
    this.surveysList = 'listSurveys/';

    // operations
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

  /**
   * Get the number of registered employees
   */
  getNumberOfEmployees() {
    return this.http.get(this.url + this.urlEmployees + this.count, {responseType: 'text'})
      .pipe(
        catchError(ApiService.handleError)
      );
  }

  /**
   * Get surveys
   */
  getSurveys(type: string) {
    switch (type) {
      case 'all':
        return this.http.get<Sondage[]>(`${this.url + this.surveys}`)
          .pipe(
            catchError(ApiService.handleError)
          );
      case 'date':
        return this.http.get<Sondage[]>(`${this.url + this.surveysDate}`)
          .pipe(
            catchError(ApiService.handleError)
          );
      case 'location':
        return this.http.get<Sondage[]>(`${this.url + this.surveysLocation}`)
          .pipe(
            catchError(ApiService.handleError)
          );
      case 'dateLocation':
        return this.http.get<Sondage[]>(`${this.url + this.surveysDateLocation}`)
          .pipe(
            catchError(ApiService.handleError)
          );
      case 'list':
        return this.http.get<Sondage[]>(`${this.url + this.surveysList}`)
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
    return this.http.get<Sondage>(`${this.url + this.surveys + id}`)
      .pipe(
        catchError(ApiService.handleError)
      );
  }

  /**
   * Get the number of created surveys
   */
  getNumberOfSurveys(type: string) {
    switch (type) {
      case 'all':
        return this.http.get(this.url + this.surveys + this.count, {responseType: 'text'})
          .pipe(
            catchError(ApiService.handleError)
          );
      case 'date':
        return this.http.get(this.url + this.surveysDate + this.count, {responseType: 'text'})
          .pipe(
            catchError(ApiService.handleError)
          );
      case 'location':
        return this.http.get(this.url + this.surveysLocation + this.count, {responseType: 'text'})
          .pipe(
            catchError(ApiService.handleError)
          );
      case 'dateLocation':
        return this.http.get(this.url + this.surveysDateLocation + this.count, {responseType: 'text'})
          .pipe(
            catchError(ApiService.handleError)
          );
      case 'list':
        return this.http.get(this.url + this.surveysList + this.count, {responseType: 'text'})
          .pipe(
            catchError(ApiService.handleError)
          );
    }
  }
}

