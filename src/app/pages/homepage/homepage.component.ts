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
    this.currentPage = 1;
    this.countries = this.filter((this.currentRegion = 'all'));
    this.countries = this.paginate(
      this.countryService.search(this.countries, input)
    );
  }

  onFilter(region: string) {
    this.currentPage = 1;
    this.currentRegion = region.toLowerCase();
    this.pages = this.setPageRange(this.filter(region).length);
    this.countries = this.paginate(this.countries);
  }

  onPageClick(page: number) {
    this.currentPage = page;
    this.countries = this.paginate(this.filter(this.currentRegion));
  }

  ngOnInit(): void {
    this.loading = true;

    this.service.getAll().subscribe((res: any) => {
      this.loading = false;
      this.countries = this.paginate(res);
      this.pages = this.setPageRange(res.length);
      this.restoreCountries = [...res];
    });
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
