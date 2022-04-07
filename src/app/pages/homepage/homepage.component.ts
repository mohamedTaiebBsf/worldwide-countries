import { Component } from '@angular/core';
import { AbstractCountry } from 'src/app/abstract/abstract-country';
import { ApiService } from 'src/app/services/api.service';
import { CountryService } from './../../services/country.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent extends AbstractCountry {
  constructor(service: ApiService, countryService: CountryService) {
    super(service, countryService);
  }

  onSearch(input: string) {
    this.currentPage = 1;

    if (this.data !== null) {
      this.data = this.filter((this.currentRegion = 'all'));
      this.pages = this.setPageRange(this.data.length);
      this.data = this.paginate(this.countryService.search(this.data, input));
    }
  }

  onFilter(region: string) {
    this.currentPage = 1;
    this.currentRegion = region.toLowerCase();
    if (this.data !== null) {
      this.pages = this.setPageRange(this.filter(region).length);
      this.data = this.paginate(this.data);
    }
  }

  onPageClick(page: number) {
    this.currentPage = page;
    this.data = this.paginate(this.filter(this.currentRegion));
  }

  onPrevious() {
    if (this.currentPage === 1) return;

    this.currentPage--;
    this.data = this.paginate(this.filter(this.currentRegion));
  }

  onNext() {
    if (this.currentPage === this.pages.length) return;

    this.currentPage++;
    this.data = this.paginate(this.filter(this.currentRegion));
  }

  ngOnInit(): void {
    this.loading = true;

    this.fetchAll();
  }
}
