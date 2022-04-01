import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
})
export class CountriesComponent {
  @Input('countries') countries!: any[];
}
