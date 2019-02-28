import { Observable, of } from 'rxjs';

import { ICurrentWeather, IWeatherService } from '../interfaces';

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    cityOrZip: 'Bursa',
    country: 'TR',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzle',
  };

  public getCurrentWeather(
    cityOrZip: string,
    country: string
  ): Observable<ICurrentWeather> {
    return of(this.fakeWeather);
  }
}
