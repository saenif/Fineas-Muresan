import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import {
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";

import 'hammerjs';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherService } from './weather/weather.service';
import { MaterialModule } from './material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CitySearchComponent } from './city-search/city-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    SideNavComponent,
    CitySearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
