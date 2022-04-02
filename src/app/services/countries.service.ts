import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get(this.apiUrl + '/all');
  }

  getCountryByName(name: string) {
    return this.http.get(this.apiUrl + '/name/' + name);
  }

  getCountryByCode(code: string) {
    return this.http.get(this.apiUrl + '/alpha/' + code);
  }
}
