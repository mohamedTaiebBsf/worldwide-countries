import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'country/:name', component: CountryPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
