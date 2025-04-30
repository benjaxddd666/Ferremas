import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';


import { CarritoService } from '../../services/carrito.service'; // Importa el servicio

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  imagen: string;
  descripcion: string;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProductosPage implements OnInit {
  productos: Producto[] = [
    // Herramientas manuales y eléctricas
    {
      id: 1,
      nombre: 'Taladro inalámbrico profesional',
      precio: 45990,
      categoria: 'Herramientas manuales y eléctricas',
      imagen: 'assets/img/imagenes/taladro1.jpg',
      descripcion: 'Taladro inalámbrico de alta potencia con batería de larga duración'
    },
    {
      id: 2,
      nombre: 'Taladro con cable',
      precio: 32990,
      categoria: 'Herramientas manuales y eléctricas',
      imagen: 'assets/img/imagenes/taladro2.png',
      descripcion: 'Taladro eléctrico con cable para uso profesional'
    },
    {
      id: 4,
      nombre: 'Martillo de carpintero',
      precio: 12990,
      categoria: 'Herramientas manuales y eléctricas',
      imagen: 'assets/img/imagenes/martillo1.jpg',
      descripcion: 'Martillo resistente para trabajos pesados'
    },
    {
      id: 5,
      nombre: 'Martillo de bola',
      precio: 14990,
      categoria: 'Herramientas manuales y eléctricas',
      imagen: 'assets/img/imagenes/martillo2.jpg',
      descripcion: 'Martillo de bola para trabajos de metalurgia'
    },
    {
      id: 6,
      nombre: 'Martillo demoledor',
      precio: 18990,
      categoria: 'Herramientas manuales y eléctricas',
      imagen: 'assets/img/imagenes/martillo3.jpg',
      descripcion: 'Martillo demoledor para trabajos de demolición'
    },
    {
      id: 7,
      nombre: 'Sierra circular compacta',
      precio: 29990,
      categoria: 'Herramientas manuales y eléctricas',
      imagen: 'assets/img/imagenes/cierra1.jpg',
      descripcion: 'Sierra circular compacta para cortes precisos'
    },
    {
      id: 8,
      nombre: 'Sierra de mesa',
      precio: 45990,
      categoria: 'Herramientas manuales y eléctricas',
      imagen: 'assets/img/imagenes/cierra2.jpg',
      descripcion: 'Sierra de mesa para cortes largos y precisos'
    },
    {
      id: 9,
      nombre: 'Sierra de calar',
      precio: 25990,
      categoria: 'Herramientas manuales y eléctricas',
      imagen: 'assets/img/imagenes/cierra3.jpg',
      descripcion: 'Sierra de calar para cortes curvos y detallados'
    },
    
    // Materiales eléctricos
    {
      id: 10,
      nombre: 'Interruptor doble',
      precio: 3990,
      categoria: 'Materiales eléctricos',
      imagen: 'assets/img/imagenes/interruptor1.jpg',
      descripcion: 'Interruptor doble para instalaciones eléctricas'
    },
    {
      id: 11,
      nombre: 'Interruptor con enchufe',
      precio: 4990,
      categoria: 'Materiales eléctricos',
      imagen: 'assets/img/imagenes/interruptor_enchufe.jpg',
      descripcion: 'Interruptor con enchufe integrado para instalaciones eléctricas'
    },
    {
      id: 12,
      nombre: 'Interruptor triple',
      precio: 5990,
      categoria: 'Materiales eléctricos',
      imagen: 'assets/img/imagenes/interruptor2.jpg',
      descripcion: 'Interruptor triple para instalaciones eléctricas'
    },
    {
      id: 13,
      nombre: 'Enchufe simple',
      precio: 2990,
      categoria: 'Materiales eléctricos',
      imagen: 'assets/img/imagenes/enchufe1.jpg',
      descripcion: 'Enchufe simple para instalaciones eléctricas'
    },
    {
      id: 14,
      nombre: 'Enchufe doble',
      precio: 3990,
      categoria: 'Materiales eléctricos',
      imagen: 'assets/img/imagenes/enchufe2.jpg',
      descripcion: 'Enchufe doble para instalaciones eléctricas'
    },
    
    // Pinturas y materiales de construcción
    {
      id: 15,
      nombre: 'Masilla para paredes',
      precio: 8990,
      categoria: 'Pinturas y materiales de construcción',
      imagen: 'assets/img/imagenes/masilla1.jpg',
      descripcion: 'Masilla para reparación de paredes y techos'
    },
    {
      id: 16,
      nombre: 'Masilla para madera',
      precio: 7990,
      categoria: 'Pinturas y materiales de construcción',
      imagen: 'assets/img/imagenes/masilla2.jpg',
      descripcion: 'Masilla para reparación de muebles y elementos de madera'
    },
    {
      id: 17,
      nombre: 'Cemento rápido',
      precio: 12990,
      categoria: 'Pinturas y materiales de construcción',
      imagen: 'assets/img/imagenes/cemento1.jpg',
      descripcion: 'Cemento de fraguado rápido para reparaciones urgentes'
    },
    {
      id: 18,
      nombre: 'Cemento albañilería',
      precio: 9990,
      categoria: 'Pinturas y materiales de construcción',
      imagen: 'assets/img/imagenes/cemento2.jpg',
      descripcion: 'Cemento para trabajos de albañilería y construcción'
    },
    
    // Artículos de seguridad
    {
      id: 19,
      nombre: 'Casco de seguridad',
      precio: 8990,
      categoria: 'Artículos de seguridad',
      imagen: 'assets/img/imagenes/casco1.jpg',
      descripcion: 'Casco de seguridad para construcción'
    },
    {
      id: 20,
      nombre: 'Casco con visera',
      precio: 12990,
      categoria: 'Artículos de seguridad',
      imagen: 'assets/img/imagenes/casco2.jpg',
      descripcion: 'Casco de seguridad con visera para mayor protección'
    },
    {
      id: 21,
      nombre: 'Guantes de trabajo',
      precio: 5990,
      categoria: 'Artículos de seguridad',
      imagen: 'assets/img/imagenes/guante1.jpg',
      descripcion: 'Guantes resistentes para trabajo pesado'
    },
    {
      id: 22,
      nombre: 'Guantes de cuero',
      precio: 7990,
      categoria: 'Artículos de seguridad',
      imagen: 'assets/img/imagenes/guante2.jpg',
      descripcion: 'Guantes de cuero para trabajos que requieren precisión'
    },
    {
      id: 23,
      nombre: 'Guantes anti-impacto',
      precio: 9990,
      categoria: 'Artículos de seguridad',
      imagen: 'assets/img/imagenes/guante3.jpg',
      descripcion: 'Guantes con protección anti-impacto para trabajos pesados'
    },
    {
      id: 24,
      nombre: 'Protector auditivo tipo copa',
      precio: 4990,
      categoria: 'Artículos de seguridad',
      imagen: 'assets/img/imagenes/protector_auditivo1.webp',
      descripcion: 'Protector auditivo tipo copa para reducir el ruido'
    },
    {
      id: 25,
      nombre: 'Protector auditivo tipo inserto',
      precio: 3990,
      categoria: 'Artículos de seguridad',
      imagen: 'assets/img/imagenes/protector_auditivo2.jpg',
      descripcion: 'Protector auditivo tipo inserto para mayor comodidad'
    }
  ];

  categorias = [
    'Todos',
    'Herramientas manuales y eléctricas',
    'Materiales eléctricos',
    'Pinturas y materiales de construcción',
    'Artículos de seguridad'
  ];

  categoriaSeleccionada = 'Todos';
  productosFiltrados: Producto[] = [];

  constructor(
    private router: Router,
    private carritoService: CarritoService // Inyecta el servicio aquí
  ) { }

  ngOnInit() {
    this.filtrarProductos();
  }

  segmentChanged(event: any) {
    this.categoriaSeleccionada = event.detail.value;
    this.filtrarProductos();
  }

  filtrarProductos() {
    if (this.categoriaSeleccionada === 'Todos') {
      this.productosFiltrados = this.productos;
    } else {
      this.productosFiltrados = this.productos.filter(
        producto => producto.categoria === this.categoriaSeleccionada
      );
    }
  }

  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregarProducto(producto); // Llama al método del servicio
    console.log('Producto agregado al carrito:', producto);
    // Opcional: podrías mostrar una notificación/toast aquí
  }

  irAlCarrito() {
    this.router.navigate(['/carrito']);
  }
}
