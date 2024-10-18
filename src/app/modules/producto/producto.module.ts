import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

// VISTAS DEL MÓDULO PRODUCTO
import { ProductoComponent } from './pages/producto/producto.component';
import { CardComponent } from './components/card/card.component';
import { CardAlimentacionComponent } from './components/card-alimentacion/card-alimentacion.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { PublicacionComponent } from './pages/publicacion/publicacion.component';



@NgModule({
  declarations: [
    ProductoComponent,
    CardComponent,
    CardAlimentacionComponent,
    CarruselComponent,
    PublicacionComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
  ],
  exports:[
    ProductoComponent,
    CardComponent,
    CardAlimentacionComponent,
  ],
})
export class ProductoModule { }
