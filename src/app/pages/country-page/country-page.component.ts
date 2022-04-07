import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractCountry } from 'src/app/abstract/abstract-country';
import { ApiService } from 'src/app/services/api.service';
import { CountryService } from './../../services/country.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent extends AbstractCountry {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    service: ApiService,
    countryService: CountryService
  ) {
    super(service, countryService);
  }

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let countryName = params.get('name') as string;
      this.loading = true;

      this.fetchByName(countryName);
    });
  }
}
