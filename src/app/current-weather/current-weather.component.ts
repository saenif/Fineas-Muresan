import { Component, OnInit } from '@angular/core';

import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

  constructor(private weatherService: WeatherService) {
    // this is a mock data in case that http request fails
    this.current = {
      city: 'default_city',
      country: 'default_country',
      date: 2017,
      image: 'assets/img/sunny.svg',
      temperature: 72,
      description: 'default_weather',
    } as ICurrentWeather;
  }

  ngOnInit() {
    this.weatherService
      .getCurrentWeather('Selimbar', 'RO')
      .subscribe(data => (this.current = data));
  }
}
