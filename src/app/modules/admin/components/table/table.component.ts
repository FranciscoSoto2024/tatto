import { Component } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Creamos colección local de productos -> la definimos como array
  coleccionPublicaciones: Publicacion[] = [];

  productoSeleccionado!: Publicacion; // ! <- tomar valores vacíos

  modalVisiblePublicacion: boolean = false;

  nombreImagen!: string; // obtendrá el nombre de la imagen

  imagen!: string; // obtendrá la ruta de la imagen

  // Definimos formulario para los productos
  /**
   * Atributos alfanuméricos (string) se inicializan con comillas simples
   * Atributos numéricos (number) se inicializan con cero ('0')
   */
  Publicacion = new FormGroup({
    idPublicacion: new FormControl('', Validators.required),
    Numero: new FormControl(0, Validators.required),
    Comentario: new FormControl('', Validators.required),
    Calificacion: new FormControl('', Validators.required),
    // imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required)
  })

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    // subscribe -> método de notificación de cambios (observable)
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionPublicaciones = producto;
    })
  }

  async agregarProducto() {
    if (this.Publicacion.valid) {
      let nuevaPublicaion: Publicacion = {
        idPublicacion: '',
        Numero: this.Publicacion.value.Numero!,
        Comentario: this.Publicacion.value.Comentario!,
        Calificacion: this.Publicacion.value.Calificacion!,
        imagen: '',
        alt: this.Publicacion.value.alt!
      }

      // Enviamos nombre y url de la imagen; definimos carpeta de imágenes como "productos"
      await this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "publicaciones")
        .then(resp => {
          // encapsulamos respuesta y envíamos la información obtenida
          this.servicioCrud.obtenerUrlImagen(resp)
            .then(url => {
              // ahora método crearProducto recibe datos del formulario y URL creada
              this.servicioCrud.crearProducto(nuevaPublicaion, url)
                .then(producto => {
                  alert("Ha agregado un nueva publicacion con éxito.");

                  // Resetea el formulario y las casillas quedan vacías
                  this.Publicacion.reset();
                })
                .catch(error => {
                  alert("Ha ocurrido un error al cargar una publicacion.");

                  this.Publicacion.reset();
                })
            })
        })
    }
  }

  // CARGAR IMÁGENES
  cargarImagen(event: any){
    // Variable para obtener el archivo subido desde el input del HTML
    let archivo = event.target.files[0];

    // Variable para crear un nuevo objeto de tipo "archivo" o "file" y leerlo
    let reader = new FileReader();

    if(archivo != undefined){
      /*
        Llamamos a método readAsDataURL para leer toda la información recibida
        Envíamos como parámetro al "archivo" porque será el encargador de tener la 
        info ingresada por el usuario
      */
      reader.readAsDataURL(archivo);

      // Definimos qué haremos con la información mediante función flecha
      reader.onloadend = () => {
        let url = reader.result;

        // Condicionamos según una URL existente y no "nula"
        if(url != null){
          // Definimos nombre de la imagen con atributo "name" del input
          this.nombreImagen = archivo.name;

          // Definimos ruta de la imagen según la url recibida
          this.imagen = url.toString();
        }
      }
    }
  }

  // ELIMINAR PRODUCTOS
  // función vinculada al modal y el botón de la tabla
  mostrarBorrar(publicacionSeleccionado: Publicacion) {
    this.modalVisiblePublicacion = true;

    this.productoSeleccionado = publicacionSeleccionado;
  }

  borrarProducto() {
    /*
      Ahora envíamos tanto el ID del producto (para identificarlo en Firestore)
      y la URL de la imagen (para identificarlo en Storage)
      ID y URL <- identificadores propios de cada archivo en la Base de Datos
    */
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idPublicacion, this.productoSeleccionado.imagen)
      .then(respuesta => {
        alert("Se ha podido eliminar con éxito.");
      })
      .catch(error => {
        alert("Ha ocurrido un error al eliminar una publicacion: \n" + error);
      })
  }

  // EDITAR PRODUCTOS
  // Se envía y llama al momento que tocamos botón "Editar" de la tabla
  mostrarEditar(publicacionSeleccionado: Publicacion) {
    this.productoSeleccionado = publicacionSeleccionado;
    /*
      Toma los valores del producto seleccionado y los va a
      autocompletar en el formulario del modal
      (menos el ID y la URL de la imagen)
    */
    this.Publicacion.setValue({
      idPublicacion: publicacionSeleccionado.idPublicacion,
      Numero: publicacionSeleccionado.Numero,
      Comentario: publicacionSeleccionado.Comentario,
      Calificacion: publicacionSeleccionado.Calificacion,
      // imagen: productoSeleccionado.imagen,
      alt: publicacionSeleccionado.alt
    })
  }

  // VINCULA A BOTÓN "editarProducto" del modal de "Editar"
  editarProducto() {
    let datos: Publicacion = {
      // Solo idProducto no se modifica por el usuario
      idPublicacion: this.productoSeleccionado.idPublicacion,
      /* Los demás atributos reciben nueva información/ 
      valor desde el formulario */
      Numero: this.Publicacion.value.Numero!,
      Comentario: this.Publicacion.value.Comentario!,
      Calificacion: this.Publicacion.value.Calificacion!,
      imagen: this.productoSeleccionado.imagen,
      alt: this.Publicacion.value.alt!
    }

    // Verificamos si el usuario ingresa o no una nueva imagen
    if(this.imagen){
      this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "publicaciones")
      .then(resp => {
        this.servicioCrud.obtenerUrlImagen(resp)
        .then(url =>{
          datos.imagen = url; // Actualizamos URL de la imagen en los datos del formulario

          this.actualizarProducto(datos); // Actualizamos los datos

          this.Publicacion.reset(); // Vaciar las casillas del formulario
        })
        .catch(error => {
          alert("Hubo un problema al subir la imagen :( \n"+error);

          this.Publicacion.reset();
        })
      })
    }else{
      /*
        Actualizamos formulario con los datos recibidos del usuario, pero sin 
        modificar la imagen ya existente en Firestore y en Storage
      */
      this.actualizarProducto(datos);
    }
  }

  // ACTUALIZAR la información ya existente de los productos
  actualizarProducto(datos: Publicacion){
    // Enviamos al método el id del producto seleccionado y los datos actualizados
    this.servicioCrud.modificarProducto(this.productoSeleccionado.idPublicacion, datos)
      .then(producto => {
        alert("La publicacion se ha modificado con éxito.");
      })
      .catch(error => {
        alert("Hubo un problema al modificar la publicacion \n" + error);
      })
  }
}