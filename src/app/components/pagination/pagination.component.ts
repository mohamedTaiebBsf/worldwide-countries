import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  @Input('pages') pages!: number[];
  @Input('currentPage') currentPage!: number;
  @Input('perPage') perPage!: number;
  @Output('onPageClick') onPageClick = new EventEmitter();
  @Output('onPrevious') onPrevious = new EventEmitter();
  @Output('onNext') onNext = new EventEmitter();
}
