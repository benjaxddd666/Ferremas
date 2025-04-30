import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../services/carrito.service';
import { Router } from '@angular/router'; // Importa Router


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
    private router: Router // Inyecta Router
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
}