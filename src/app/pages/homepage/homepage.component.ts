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
  }

  ngOnInit(): void {
    this.loading = true;

    this.service.getAll().subscribe((res: any) => {
      this.loading = false;
      this.countries = res;
      this.restoreCountries = [...this.countries];
    });
  }
}
