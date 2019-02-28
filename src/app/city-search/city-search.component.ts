import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {

  search = new FormControl('', [Validators.minLength(2)]);

  public constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((userInput: string) => {
      if (!this.search.invalid) {
        const searchValue = userInput.split(',').map(s => s.trim());
        this.weatherService.getCurrentWeather(searchValue[0], searchValue.length > 1 ? searchValue[1] : undefined)
          .subscribe(data => this.weatherService.currentWeather.next(data));
      }
    });
  }

  public getErrorMessage() {
    return this.search.hasError('minLength') ? 'Type more than one character to search' : '';
  }
}
