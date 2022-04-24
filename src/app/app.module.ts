import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormfundComponent } from './formfund/formfund.component';
import { HttpClientModule } from '@angular/common/http';
import { FundDividendService } from './services/fund-dividend.service';
import { NgChartsModule } from 'ng2-charts';
import { GrafDividend10Component } from './graf-dividend10/graf-dividend10.component';

@NgModule({
  declarations: [
    AppComponent,
    FormfundComponent,
    GrafDividend10Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [ [FundDividendService]],
  bootstrap: [AppComponent]
})
export class AppModule { }
