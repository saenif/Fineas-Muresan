import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { WeatherService } from '../weather/weather.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();

  search = new FormControl('', [Validators.minLength(2)]);


  public constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.search.valueChanges
      .subscribe(data => this.searchEvent.emit(data));
  }

  // ngOnInit(): void {
  //   this.search.valueChanges
  //     .pipe(debounceTime(1000))
  //     .subscribe((searchValue: string) => {
  //     if (!this.search.invalid) {
  //       const userInput = searchValue.split(',').map(s => s.trim());
  //       this.weatherService
  //         .getCurrentWeather(
  //           userInput[0],
  //           userInput.length > 1 ? userInput[1] : undefined
  //         )
  //         .subscribe(data => console.log(data));
  //     }
  //   });
  // }

  public getErrorMessage() {
    return this.search.hasError('minLength') ? 'Type more than one character to search': '';
  }
}
