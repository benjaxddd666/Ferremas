import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../services/carrito.service';
import { Router } from '@angular/router'; // Importa Router
import { PagoService } from '../../services/pago.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class CarritoPage implements OnInit {
  productos: any[] = [];
  total: number = 0;

  constructor(
    private carritoService: CarritoService,
    private router: Router, // Inyecta Router
    private pagoService: PagoService
  ) {}

  ngOnInit() {
    this.productos = this.carritoService.getProductos();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.productos.reduce((sum, prod) => sum + prod.precio * prod.cantidad, 0);
  }

  eliminarProducto(id: number) {
    this.carritoService.eliminarProducto(id);
    this.productos = this.carritoService.getProductos();
    this.calcularTotal();
  }

  actualizarCantidad(id: number, cantidad: number) {
    this.carritoService.actualizarCantidad(id, cantidad);
    this.productos = this.carritoService.getProductos();
    this.calcularTotal();
  }

  procederAlPago() {
    // Puedes añadir validaciones aquí (ej: carrito no vacío)
    this.router.navigate(['/pago']); // Navega a la página de pago
  }

  pagar() {
    const amount = this.total; // Usar el total real del carrito
    const sessionId = 'sesion123'; // Puedes generar uno único por usuario
    const buyOrder = 'orden' + new Date().getTime(); // Único por transacción
    const returnUrl = 'http://localhost:4200/retorno'; // Cambia por tu URL real

    this.pagoService.crearTransaccion(amount, sessionId, buyOrder, returnUrl)
      .subscribe(response => {
        this.redirigirWebpay(response.url, response.token);
      }, error => {
        alert('Error al iniciar el pago');
      });
  }

  redirigirWebpay(url: string, token: string) {
    // Crea y envía un formulario POST a Webpay
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = url;

    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'token_ws';
    input.value = token;
    form.appendChild(input);

    document.body.appendChild(form);
    form.submit();
  }
}