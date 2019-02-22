import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatToolbarModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherService } from './weather/weather.service';
import { WeatherServiceFake } from './weather/weather.service.fake';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatToolbarModule],
      declarations: [
        AppComponent,
        CurrentWeatherComponent,
        MatCardTitle,
        MatCardHeader,
        MatCardContent,
        MatCard,
      ],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a span tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('LocalCast Weather');
  }));
});
