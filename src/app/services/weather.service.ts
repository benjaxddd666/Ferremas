import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OpenWheather } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  async getweather(
    city: string
  ): Promise<any> {
    const result = await this.http.get(`${OpenWheather.url}?q=${city}&appid=${OpenWheather.API_KEY}&units=metric&lang=es`).toPromise();
    return result;
  }

}
