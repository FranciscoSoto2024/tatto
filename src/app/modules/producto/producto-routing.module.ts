import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TODAS LAS VISTAS DEL MÓDULO PRODUCTO
import { ProductoComponent } from './pages/producto/producto.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SobreNosotrosComponent } from '../sobre-nosotros/pages/sobre-nosotros/sobre-nosotros.component';
import { ProductosropaComponent } from './pages/productosropa/productosropa.component';

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
  {
    path:"productosropa",component:ProductosropaComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
