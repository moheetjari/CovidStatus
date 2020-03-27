import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmpIndiaComponent } from './cmp-india/cmp-india.component';
import { CmpAllCasesComponent } from './cmp-all-cases/cmp-all-cases.component';
import { CmpHistoryByCountryComponent } from './cmp-history-by-country/cmp-history-by-country.component';


const routes: Routes = [
  {
    path: "",
    component: CmpAllCasesComponent,
    pathMatch: 'full'
  },
  {
    path: "india",
    component: CmpIndiaComponent
  },
  {
    path: "allcases",
    component: CmpAllCasesComponent
  },
  {
    path: "historyByCountry/:country",
    component: CmpHistoryByCountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
