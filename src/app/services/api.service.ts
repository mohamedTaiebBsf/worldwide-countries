import { CountryService } from './country.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

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
    return from(this.http.get(this.apiUrl + '/all')).pipe(
      map((res: any) => this.countryService.sortByName(res))
    );
  }

  getByName(name: string) {
    return this.http.get(this.apiUrl + '/name/' + name);
  }

  getByCode(code: string) {
    return this.http.get(this.apiUrl + '/alpha/' + code);
  }
}
