import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoPageRoutingModule } from './pago-routing.module';

// Elimina la importación de PagoPage si no se usa en otro lugar del módulo
// import { PagoPage } from './pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoPageRoutingModule
  ],
  declarations: [] // Elimina PagoPage de aquí
})
export class PagoPageModule {}
