import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TODAS LAS VISTAS DEL MÓDULO PRODUCTO
import { ProductoComponent } from './pages/producto/producto.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SobreNosotrosComponent } from '../sobre-nosotros/pages/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  {
    path:"producto",component:ProductoComponent
  },
  {
    path:"contacto",component:ContactoComponent
  },
  {
    path:"Sobrenosotros",component:SobreNosotrosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
