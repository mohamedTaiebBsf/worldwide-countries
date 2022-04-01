import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HeaderComponent } from './components/header/header.component';
import { RegionFilterComponent } from './components/region-filter/region-filter.component';
import { SearchComponent } from './components/search/search.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CountriesService } from './services/countries.service';
import { CountryComponent } from './components/countries/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemeSwitcherComponent,
    HomepageComponent,
    SearchComponent,
    RegionFilterComponent,
    CountriesComponent,
    CountryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CountriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
