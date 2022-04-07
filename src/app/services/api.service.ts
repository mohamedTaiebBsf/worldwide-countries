import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AppError } from './../errors/app-error';
import { NotFoundError } from './../errors/not-Found-error';
import { CountryService } from './country.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private countryService: CountryService,
    private notification: NotificationService
  ) {}

  getAll() {
    return from(this.http.get(this.apiUrl + '/all'))
      .pipe(map((res: any) => this.countryService.sortByName(res)))
      .pipe(
        catchError((error: Response) => {
          this.throwError(error);
        })
      );
  }

  getByName(name: string) {
    return from(this.http.get(this.apiUrl + '/name/' + name))
      .pipe(map((res: any) => res[0]))
      .pipe(
        catchError((error: Response) => {
          this.throwError(error);
        })
      );
  }

  getByCode(code: string) {
    return this.http
      .get(this.apiUrl + '/alpha/' + code)
      .pipe(map((res: any) => res[0]))
      .pipe(
        catchError((error: Response) => {
          this.throwError(error);
        })
      );
  }

  setError(error: AppError): string {
    if (error instanceof NotFoundError) {
      this.notification.error(error.originalError.error.message, '404 Error');

      return `Bad Request to the API!`;
    } else {
      this.notification.error(
        `Please, Try it later! - ${error.originalError.error.message}`,
        'Unexpected Error'
      );

      return '';
    }
  }

  private throwError(error: Response): never {
    if (error.status === 404) throw new NotFoundError(error);
    throw new AppError(error);
  }
}
