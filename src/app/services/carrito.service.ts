import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productos: any[] = [];

  getProductos() {
    return this.productos;
  }

  agregarProducto(producto: any) {
    const existente = this.productos.find(p => p.id === producto.id);
    if (existente) {
      existente.cantidad += producto.cantidad || 1;
    } else {
      this.productos.push({ ...producto, cantidad: producto.cantidad || 1 });
    }
  }

  eliminarProducto(id: number) {
    this.productos = this.productos.filter(p => p.id !== id);
  }

  actualizarCantidad(id: number, cantidad: number) {
    const prod = this.productos.find(p => p.id === id);
    if (prod) prod.cantidad = cantidad;
  }

  limpiarCarrito() {
    this.productos = [];
  }
}