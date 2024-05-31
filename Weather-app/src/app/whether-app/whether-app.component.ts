import { Component, OnInit } from '@angular/core';
import { WheatherService } from '../wheather.service';

@Component({
  selector: 'app-whether-app',
  templateUrl: './whether-app.component.html',
  styleUrl: './whether-app.component.css',
})
export class WhetherAppComponent implements OnInit {
  myWeather: any;
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = '';
  iconUrl: string = '';
  city: string = 'London';
  unit: string = 'metric';
  windSpeed: number = 0;
  descriptions: string = '';
  constructor(private WheatherService: WheatherService) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.WheatherService.getWeather(this.city, this.unit).subscribe({
      next: (res) => {
        console.log(res);
        this.myWeather = res;
        this.myWeather = res;
        this.temperature = this.myWeather.main.temp;
        this.feelsLikeTemp = this.myWeather.main.feels_like;
        this.humidity = this.myWeather.main.humidity;
        this.pressure = this.myWeather.main.pressure;
        this.summary = this.myWeather.weather[0].main;
        this.windSpeed = this.myWeather.wind.speed;
        this.descriptions = this.myWeather.weather[0].description;
        this.iconUrl =
          'https://openweathermap.org/img/wn/' +
          this.myWeather.weather[0].icon +
          '@2x.png';
        this.city = this.myWeather.name;
      },
      error(err) {
        console.log(err.massage);
      },
      complete() {
        console.log('Complited');
      },
    });
  }

  onChangeRadio() {
    if (this.unit == 'imperial') {
      this.unit = 'metric';
    } else {
      this.unit = 'imperial';
    }

    this.getWeather();
  }
}
