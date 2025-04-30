import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class HomePage implements OnInit {

  selectedCity: string = '';
  weatherResult: any;

  // Opciones para el slider de promociones
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 3000
    }
  };

  constructor(private carritoService: CarritoService, private weatherService: WeatherService) { }

  ngOnInit() {
  }

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
  }

  async getWeather(event: Event) {
    try {
      event.preventDefault();

      if (!this.selectedCity) return;
      const result = await this.weatherService.getweather(this.selectedCity);
      this.weatherResult = result;
    } catch (error) {
      console.error(error);
    }


    /*fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.selectedCity}&appid=TU_API_KEY&units=metric&lang=es`)
      .then(res => res.json())
      .then(data => {
        this.weatherResult = data;
        console.log(data);
      })
      .catch(err => console.error('Error al obtener clima', err));*/
  }
}
