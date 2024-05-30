import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WheatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string, units: string) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&appid=76c425f83d3dd4a696721e5d4d4cc3fe&units=' +
        units
    );
  }
}
