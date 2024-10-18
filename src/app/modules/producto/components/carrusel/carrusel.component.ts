import { Component } from '@angular/core';
import { Publicacion } from 'src/app/models/Publicacion';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  pub:string = '';

  //Coleccion de productos añadidos a la fiesta
  publicacionCarrusel: Publicacion[] = [];

  publicacionAnadida(publicacion:Publicacion){
    //Remplazamos el valor de product
    this.pub =  `${publicacion.idPublicacion} : $${publicacion.Numero}`;


    try{
      /*Agregamos la informacion recibida
    por el parametro de la funcion a la coleccion
    del carrusel*/
    this.publicacionCarrusel.push(publicacion);

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
