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
      city: '',
      country: '',
      date: 0,
      image: '',
      temperature: 0,
      description: '',
    } as ICurrentWeather;
  }

  ngOnInit() {
    this.weatherService
      .getCurrentWeather('Selimbar', 'RO')
      .subscribe(data => (this.current = data));
  }
}
