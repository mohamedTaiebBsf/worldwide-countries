import { NotFoundError } from './../errors/not-Found-error';
import { AppError } from './../errors/app-error';
import { CountryService } from './country.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private countryService: CountryService
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
      .get(this.apiUrl + '/alphai/' + code)
      .pipe(map((res: any) => res[0]))
      .pipe(
        catchError((error: Response) => {
          this.throwError(error);
        })
      );
  }

  setError(error: AppError): string {
    if (error instanceof NotFoundError) {
      return `Bad Request to the API:  ${error.originalError.error.message}`;
    } else {
      return `Unexpected Error from the server: Please, Try it later! - ${error.originalError.error.message}`;
    }
  }

  private throwError(error: Response): never {
    if (error.status === 404) throw new NotFoundError(error);
    throw new AppError(error);
  }
}
