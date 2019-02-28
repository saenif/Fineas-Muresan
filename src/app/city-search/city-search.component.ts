import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();

  search = new FormControl('', [Validators.minLength(2)]);

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((userInput: string) => {
        if (!this.search.invalid) {
          this.searchEvent.emit(userInput);
        }
      });
  }

  public getErrorMessage() {
    return this.search.hasError('minLength') ? 'Type more than one character to search' : '';
  }
}
