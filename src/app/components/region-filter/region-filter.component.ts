import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-region-filter',
  templateUrl: './region-filter.component.html',
})
export class RegionFilterComponent implements OnInit {
  @Output('onFilter') onFilter = new EventEmitter();
  open: boolean = false;
  regions: string[] = [
    'All',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  onClick() {
    this.open = !this.open;
  }
  constructor() {}

  ngOnInit(): void {}
}
