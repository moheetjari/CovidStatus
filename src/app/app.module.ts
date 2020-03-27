import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CmpIndiaComponent } from './cmp-india/cmp-india.component';
import { DatePipe } from '@angular/common'
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { CmpAllCasesComponent } from './cmp-all-cases/cmp-all-cases.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CmpHistoryByCountryComponent } from './cmp-history-by-country/cmp-history-by-country.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpAllCasesComponent,
    CmpHistoryByCountryComponent,
    CmpIndiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InputsModule,
    BrowserAnimationsModule,
    DateInputsModule,
    GridModule,
    NgxSpinnerModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
