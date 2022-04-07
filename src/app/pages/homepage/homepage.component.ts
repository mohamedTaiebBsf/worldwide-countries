import { NotFoundError } from './../../errors/not-Found-error';
import { AppError } from './../../errors/app-error';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CountryService } from './../../services/country.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent implements OnInit {
  countries!: any[] | null;
  restoreCountries: any[] = [];
  loading: boolean = false;
  currentRegion: string = 'all';
  currentPage: number = 1;
  perPage: number = 10;
  pages: number[] = [];
  error: string = '';

  constructor(
    private service: ApiService,
    private countryService: CountryService
  ) {}

  onSearch(input: string) {
    this.currentPage = 1;
    if (this.countries !== null) {
      this.countries = this.filter((this.currentRegion = 'all'));
      this.pages = this.setPageRange(this.countries.length);
      this.countries = this.paginate(
        this.countryService.search(this.countries, input)
      );
    }
  }

  onFilter(region: string) {
    this.currentPage = 1;
    this.currentRegion = region.toLowerCase();
    if (this.countries !== null) {
      this.pages = this.setPageRange(this.filter(region).length);
      this.countries = this.paginate(this.countries);
    }
  }

  onPageClick(page: number) {
    this.currentPage = page;
    this.countries = this.paginate(this.filter(this.currentRegion));
  }

  onPrevious() {
    if (this.currentPage === 1) return;

    this.currentPage--;
    this.countries = this.paginate(this.filter(this.currentRegion));
  }

  onNext() {
    if (this.currentPage === this.pages.length) return;

    this.currentPage++;
    this.countries = this.paginate(this.filter(this.currentRegion));
  }

  ngOnInit(): void {
    this.loading = true;

    this.service.getAll().subscribe(
      (countries: any) => {
        this.loading = false;
        this.countries = this.paginate(countries);
        this.pages = this.setPageRange(countries.length);
        this.restoreCountries = [...countries];
      },
      (error: AppError) => {
        this.loading = false;
        this.countries = null;
        this.error = this.service.setError(error);
      }
    );
  }

  private filter(region: string) {
    this.countries = [...this.restoreCountries];

    return (this.countries = this.countryService.filter(
      this.countries,
      region
    ));
  }

  private paginate(data: any[]) {
    return this.countryService.paginate(data, this.currentPage, this.perPage);
  }

  private setPageRange(len: number) {
    return this.countryService.range(Math.ceil(len / this.perPage));
  }
}
