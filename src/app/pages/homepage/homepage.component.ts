import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CountryService } from './../../services/country.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent implements OnInit {
  countries!: any[];
  restoreCountries: any[] = [];
  loading?: boolean;
  currentRegion: string = 'all';
  currentPage: number = 1;
  perPage: number = 10;
  pages: number[] = [];

  constructor(
    private service: ApiService,
    private countryService: CountryService
  ) {}

  onSearch(input: string) {
    this.countries = [...this.restoreCountries];
    this.countries = this.countryService.search(this.countries, input);
  }

  onFilter(region: string) {
    this.currentRegion = region.toLowerCase();
    this.countries = [...this.restoreCountries];
    this.countries = this.countryService.filter(this.countries, region);
    this.currentPage = 1;
  }

  onPageClick(page: number) {
    this.currentPage = page;
    this.countries = [...this.restoreCountries];
    this.countries = this.countryService.paginate(
      this.countries,
      this.currentPage,
      this.perPage
    );
  }

  ngOnInit(): void {
    this.loading = true;

    this.service.getAll().subscribe((res: any) => {
      this.loading = false;
      this.countries = this.countryService.paginate(
        res,
        this.currentPage,
        this.perPage
      );
      this.pages = this.countryService.range(
        Math.ceil(res.length / this.perPage)
      );
      this.restoreCountries = [...res];
    });
  }
}
