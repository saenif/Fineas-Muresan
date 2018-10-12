import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { ICurrentWeather, IWeatherService } from '../interfaces';
import { environment } from '../../environments/environment';

interface ICurrentWeatherData {
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
  };
  sys: {
    country: string;
  };
  dt: number;
  name: string;
}

@Injectable()
export class WeatherService implements IWeatherService {
  constructor(private httpClient: HttpClient) {}

  getCurrentWeather(city: string, country: string) {
    return this.httpClient
      .get<ICurrentWeatherData>(
        `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +
          `q=${city},${country}&appid=${environment.appId}`
      )
      .pipe(map(data => this.transformToICurrentWeather(data)));
  }

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description,
    };
  }

  convertKelvinToFahrenheit(kelvin: number): number {
    return kelvin - 273.15;
  }
}
