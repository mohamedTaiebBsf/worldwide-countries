import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryComponent } from './components/countries/country/country.component';
import { HeaderComponent } from './components/header/header.component';
import { RegionFilterComponent } from './components/region-filter/region-filter.component';
import { SearchComponent } from './components/search/search.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ApiService } from './services/api.service';
import { CountryService } from './services/country.service';
import { PaginationComponent } from './components/pagination/pagination.component';

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
    SpinnerComponent,
    CountryPageComponent,
    PaginationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ApiService, CountryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
