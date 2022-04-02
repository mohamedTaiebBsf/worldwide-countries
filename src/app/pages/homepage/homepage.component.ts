import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent implements OnInit {
  countries!: any[];
  loading?: boolean;

  constructor(private service: CountriesService) {}

  ngOnInit(): void {
    this.loading = true;

    this.service.getAllCountries().subscribe((res: any) => {
      this.loading = false;
      this.countries = res;
    });
  }
}
