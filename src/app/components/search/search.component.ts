import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  @Output('search') search = new EventEmitter();
  searchInput: string = '';

  onChange(input: string) {
    this.search.emit(input);
  }

  constructor() {}

  ngOnInit(): void {}
}
