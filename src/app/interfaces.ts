import { Observable } from 'rxjs';

export interface ICurrentWeather {
  city: string;
  country: string;
  date: number;
  image: string;
  temperature: number;
  description: string;
}

export interface IWeatherService {
  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather>;
}
