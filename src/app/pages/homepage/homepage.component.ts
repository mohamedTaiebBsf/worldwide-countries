import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent implements OnInit {
  countries!: any[];

  constructor(private service: CountriesService) {}

  ngOnInit(): void {
    this.service.getAllCountries().subscribe((res) => {
      this.countries = <any>res;
      console.log('countries:', this.countries[0]);
    });
  }
}
