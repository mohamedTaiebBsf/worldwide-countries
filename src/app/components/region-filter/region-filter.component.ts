import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-region-filter',
  templateUrl: './region-filter.component.html',
})
export class RegionFilterComponent {
  @Input('currentRegion') region?: string;
  @Output('onFilter') onFilter = new EventEmitter();

  open: boolean = false;
  inside: boolean = false;
  regions: string[] = [
    'all',
    'africa',
    'americas',
    'antarctic',
    'asia',
    'europe',
    'oceania',
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
