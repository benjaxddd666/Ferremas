import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms'; // FormsModule ya está importado
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
  standalone: true,
  // FormsModule añadido aquí
  imports: [IonicModule, CommonModule, ReactiveFormsModule, FormsModule]
})
export class PagoPage implements OnInit {
  paymentForm: FormGroup;
  metodoPagoSeleccionado: string = 'tarjeta'; // Valor inicial

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.paymentForm = this.fb.group({
      nombreTarjeta: ['', [Validators.required, Validators.minLength(3)]],
      numeroTarjeta: ['', [Validators.required, Validators.pattern('^[0-9]{13,19}$')]],
      fechaExp: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/?([0-9]{2})$')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]]
    });
  }

  ngOnInit() {
    // Puedes deshabilitar/habilitar validadores según el método si lo necesitas
    this.actualizarValidadores();
  }

  metodoCambiado(event: any) {
    this.metodoPagoSeleccionado = event.detail.value;
    this.actualizarValidadores();
  }

  actualizarValidadores() {
    const esTarjeta = this.metodoPagoSeleccionado === 'tarjeta';
    // Habilita o deshabilita los controles del formulario de tarjeta
    for (const controlName in this.paymentForm.controls) {
      if (this.paymentForm.controls.hasOwnProperty(controlName)) {
        if (esTarjeta) {
          this.paymentForm.controls[controlName].enable();
        } else {
          this.paymentForm.controls[controlName].disable();
        }
      }
    }
    // Limpia los errores si se cambia a transferencia
    if (!esTarjeta) {
        this.paymentForm.reset();
    }
  }


  procesarPago() {
    if (this.metodoPagoSeleccionado === 'tarjeta') {
      if (this.paymentForm.valid) {
        console.log('Procesando pago con tarjeta (simulación)...');
        console.log(this.paymentForm.value);
        alert('Pago con tarjeta procesado (simulación)');
        // Navegar a confirmación o limpiar carrito, etc.
        // this.router.navigate(['/confirmacion-pago']);
      } else {
        console.log('Formulario de tarjeta inválido');
        this.paymentForm.markAllAsTouched();
      }
    } else if (this.metodoPagoSeleccionado === 'transferencia') {
      console.log('Procesando pago con transferencia (simulación)...');
      alert('Confirmación de transferencia recibida (simulación). Su pedido se procesará una vez verificado el pago.');
      // Navegar a confirmación o limpiar carrito, etc.
      // this.router.navigate(['/confirmacion-pago']);
    }
  }
}
