import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Publicacion } from 'src/app/models/publicacion';
import Swal from "sweetalert2" 
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  pub:string = '';

  //Coleccion de productos añadidos a la fiesta
  productoCarrusel: Producto[] = [];

  ProductoAnadido(producto:Producto){
    //Remplazamos el valor de product
    this.pub =  `${producto.nombre} : $${producto.precio}`;


    try{
      /*Agregamos la informacion recibida
    por el parametro de la funcion a la coleccion
    del carrusel*/
    this.productoCarrusel.push(producto);

    Swal.fire({
      title: '!Eso mi compa',
      text: 'Ha añadido el producto con exito',
      icon: 'info'
    })
    }
    catch(error){
      Swal.fire({
        title: '¡Oh no!',
        text: 'Ha ocurrido un error\n'+error,
        icon: 'error'
      })
    }
  }
}
