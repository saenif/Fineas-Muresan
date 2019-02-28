import { BehaviorSubject, of } from 'rxjs';

import { ICurrentWeather, IWeatherService } from '../interfaces';

export class WeatherServiceFake implements IWeatherService {
  private currentWeather: BehaviorSubject<ICurrentWeather> = new BehaviorSubject<ICurrentWeather>({
    cityOrZip: 'Bursa',
    country: 'TR',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzle',
  });

  public getCurrentWeather(cityOrZip: string, country: string): any {
    return of(this.currentWeather);
  }
}
