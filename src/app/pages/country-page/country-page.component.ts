import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit {
  country: any;
  loading?: boolean;
  borders: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: CountriesService
  ) {}

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let countryName = params.get('name') as string;
      this.loading = true;

      this.service.getCountryByName(countryName).subscribe((res: any) => {
        this.country = res[0];
        this.borders = [];

        for (let code of this.country.borders) {
          this.service.getCountryByCode(code).subscribe((res: any) => {
            this.borders.push(res[0].name.common);
          });
        }
        this.loading = false;
      });
    });
  }
}
