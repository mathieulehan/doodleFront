import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Employe} from './models/Employe';
import {Sondage} from './models/Sondage';
import {Department} from './models/Department';
import {catchError} from 'rxjs/internal/operators/catchError';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // routes
  baseRoute: string;
  departmentRoute: string;
  employeesRoute: string;
  surveysRoute: string;
  surveysDateRoute: string;
  surveysLocationRoute: string;
  surveysDateLocationRoute: string;
  surveysListRoute: string;
  countRoute: string;
  createRoute: string;

  constructor(private http: HttpClient) {
    // default route
    this.baseRoute = '/api/';
    // departments
    this.departmentRoute = 'department/';
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
    this.createRoute = 'create';
  }

  /**
   * Error handling while getting data from backend
   * @param error encountered error
   */
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

  private static getHeaders() {
    return {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  }

  /**
   * Get the list of departments
   */
  getDepartments() {
    return this.http.get<Department[]>(`${this.baseRoute + this.departmentRoute}`)
        .pipe(
            catchError(ApiService.handleError)
        );
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

  save(entity: string, model: any): Observable<any> {
    const options = ApiService.getHeaders();
    switch (entity) {
      case 'department':
        return this.http.post(`${this.baseRoute + this.departmentRoute + this.createRoute}`,
            JSON.stringify(model), options);
      case 'employee':
        return this.http.post(`${this.baseRoute + this.employeesRoute + this.createRoute}`,
            JSON.stringify(model), options);
      case 'sondage_date':
        return this.http.post(`${this.baseRoute + this.surveysDateRoute + this.createRoute}`,
            JSON.stringify(model), options);
      case 'sondage_date_lieu':
        return this.http.post(`${this.baseRoute + this.surveysDateLocationRoute + this.createRoute}`,
            JSON.stringify(model), options);
      case 'sondage_lieu':
        return this.http.post(`${this.baseRoute + this.surveysLocationRoute + this.createRoute}`,
            JSON.stringify(model), options);
      case 'sondage_liste':
        return this.http.post(`${this.baseRoute + this.surveysListRoute + this.createRoute}`,
            JSON.stringify(model), options);
    }
  }
}

