import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

// VISTAS - PÁGINAS
import { InicioComponent } from './pages/inicio/inicio.component';

// COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';

// COMPONENTES DE MATERIAL
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TiposTattooComponent } from './components/tipos-tattoo/tipos-tattoo.component';


@NgModule({
  declarations: [
    InicioComponent,
    CardComponent,
    CarouselComponent,
    TiposTattooComponent,
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    InicioComponent,
    CardComponent,
    MatButtonModule,
    MatCardModule,
  ]
})
export class InicioModule { }
