import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchComponent } from './components/search/search.component';
import { RegionFilterComponent } from './components/region-filter/region-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemeSwitcherComponent,
    HomepageComponent,
    SearchComponent,
    RegionFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
