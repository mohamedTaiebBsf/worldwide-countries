import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AppError } from './../errors/app-error';
import { CountryService } from './../services/country.service';

@Component({ template: '' })
export abstract class AbstractCountry implements OnInit {
  data: any | any[] | null;
  loading: boolean = false;
  error: string = '';
  currentRegion: string = 'all';
  currentPage: number = 1;
  perPage: number = 10;
  pages: number[] = [];
  restoreCountries: any[] = [];
  bordersError: string = '';
  borders: string[] = [];

  constructor(
    protected service: ApiService,
    protected countryService: CountryService
  ) {}

  public abstract ngOnInit(): void;

  protected fetchAll() {
    this.service.getAll().subscribe(
      (countries: any) => this.successAll(countries),
      (error: AppError) => this.handleError(error)
    );
  }

  protected fetchByName(countryName: string) {
    this.service.getByName(countryName).subscribe(
      (country: any) => this.successByName(country),
      (error: AppError) => this.handleError(error)
    );
  }

  protected setPageRange(len: number) {
    return this.countryService.range(Math.ceil(len / this.perPage));
  }

  protected filter(region: string) {
    this.data = [...this.restoreCountries];

    return (this.data = this.countryService.filter(this.data, region));
  }

  protected paginate(countries: any[]) {
    return this.countryService.paginate(
      countries,
      this.currentPage,
      this.perPage
    );
  }

  private fetchByCode(code: string) {
    this.service.getByCode(code).subscribe(
      (c: any) => {
        this.borders.push(c.name.common);
      },
      (error: AppError) => (this.bordersError = 'Unable to fetch borders!')
    );
  }

  private successAll(countries: any) {
    this.loading = false;
    this.data = this.paginate(countries);
    this.pages = this.setPageRange(countries.length);
    this.restoreCountries = [...countries];
  }

  private successByName(country: any) {
    this.data = country;
    this.borders = [];

    for (let code of this.data.borders) {
      this.fetchByCode(code);
    }
    this.borders = this.countryService.sortByName(this.borders);
    this.loading = false;
  }

  private handleError(error: AppError) {
    this.loading = false;
    this.data = null;
    this.error = this.service.setError(error);
  }
}
