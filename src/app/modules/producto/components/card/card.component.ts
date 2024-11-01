import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { Publicacion } from 'src/app/models/publicacion';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //Definimos coleccion de productos locales
  coleccionPublicacion: Publicacion[] = [];
  // Variable local para seleccionar un producto especifico
  publicacionFiltrados: Publicacion[] = []; // Array para los productos filtrados
  // Variable local para menejar estado de un modal
  modalVisible: boolean = false;
  //booleano para manejar la visibilidad de "ultima compra" 
  compraVisible:boolean = false;
  //Directivas para comunicarse con el componente padre
  @Input() publicacionReciente: string = '';

  @Output() publicacionAgregado = new EventEmitter<Publicacion>(); //@Output
  publicacionSeleccionado!: Publicacion;
  

constructor(public sevicioCrud: CrudService){}

ngOnInit(): void{
  this.sevicioCrud.obtenerProducto().subscribe(publicacion => {
    this.coleccionPublicacion = publicacion;
  })
}

//Funcion para mostrar mas informacion de los productos
mostrarVer(info:Publicacion){
  //Cambio estado del modal a true (ahora es visible)
  this.modalVisible = true
  //Guardo en variable seleccionado la informacion del producto elegido 
  this.publicacionSeleccionado = info;
}

agregarPublicacion(info : Publicacion){
  this.publicacionAgregado.emit(info);

  this.compraVisible = true;
}
}
