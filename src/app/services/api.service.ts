import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.apiUrl + '/all');
  }

  getByName(name: string) {
    return this.http.get(this.apiUrl + '/name/' + name);
  }

  getByCode(code: string) {
    return this.http.get(this.apiUrl + '/alpha/' + code);
  }
}
