import { CountryService } from './../../services/country.service';
import { AppError } from '../../errors/app-error';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit {
  country: any | null;
  loading: boolean = false;
  error: string = '';
  borders: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: ApiService,
    private countryService: CountryService
  ) {}

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let countryName = params.get('name') as string;
      this.loading = true;

      this.service.getByName(countryName).subscribe(
        (country: any) => {
          this.country = country;
          this.borders = [];

          for (let code of this.country.borders) {
            this.service.getByCode(code).subscribe(
              (c: any) => {
                this.borders.push(c.name.common);
              },
              (error: AppError) => console.log(error)
            );
          }
          this.borders = this.countryService.sortByName(this.borders);
          this.loading = false;
        },
        (error: AppError) => {
          this.loading = false;
          this.country = null;
          this.error = this.service.setError(error);
        }
      );
    });
  }
}
