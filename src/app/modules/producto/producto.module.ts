import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

// VISTAS DEL MÓDULO PRODUCTO
import { ProductoComponent } from './pages/producto/producto.component';
import { CardComponent } from './components/card/card.component';
import { CardAlimentacionComponent } from './components/card-alimentacion/card-alimentacion.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule



@NgModule({
  declarations: [
    ProductoComponent,
    CardComponent,
    CardAlimentacionComponent,
    CarruselComponent,
    ContactoComponent,
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    ReactiveFormsModule,
  ],
  exports:[
    ProductoComponent,
    CardComponent,
    CardAlimentacionComponent,
    ReactiveFormsModule,
  ],
})
export class ProductoModule { }
