import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
})
export class ThemeSwitcherComponent {
  @Output('onThemeSwitch') onThemeSwitch = new EventEmitter();

  onClick() {
    this.onThemeSwitch.emit();
  }
}
