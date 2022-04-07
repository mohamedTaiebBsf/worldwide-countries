import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  isDark: boolean = true;

  constructor(private storage: StorageService) {}

  onThemeSwitch() {
    this.isDark = !this.isDark;
    this.storage.save(this.isDark);
  }

  ngOnInit() {
    const storedData = this.storage.getData();

    if (storedData !== null) this.isDark = storedData;
  }
}
