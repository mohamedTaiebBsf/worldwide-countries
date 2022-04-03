import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-region-filter',
  templateUrl: './region-filter.component.html',
})
export class RegionFilterComponent {
  @Output('onFilter') onFilter = new EventEmitter();
  open: boolean = false;
  inside: boolean = false;
  regions: string[] = [
    'All',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  @HostListener('click')
  clicked() {
    this.inside = true;
  }

  @HostListener('document:click')
  clickedOut() {
    if (!this.inside) {
      this.open = false;
    }

    this.inside = false;
  }

  onClick() {
    this.open = !this.open;
  }
}
