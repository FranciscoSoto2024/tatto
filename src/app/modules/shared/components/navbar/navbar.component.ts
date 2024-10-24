import { Component, Output, EventEmitter  } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logueado = true; //booleana para manejo de registro y el inicio de sesion 
  deslogueado = false; // booleana para manejo de cierre sesion  
  @Output() buscarTermino = new EventEmitter<string>(); // Emitir término de búsqueda



  constructor(
  public servicioAuth: AuthService,
  public servicioRutas: Router
  ){}

  //Funcion "ingresar" para invertir los valores
  ingresar(){
    this.logueado = false;
    this.deslogueado = true;
  }

  //Funcion de "CerrarSesion" devuelve los valores originales 
  cerrarSesion(){
    this.deslogueado = false;
    this.logueado = true;

    // llamamos al metodo 
    this.servicioAuth.cerrarSesion();
    this.servicioRutas.navigate(['/'])
  }

//Funcion Cambiar fondo

cambiarFondo(){
  let toggle: HTMLInputElement | null = document.getElementById('toggle') as HTMLInputElement
  let label_toggle:HTMLElement | null = document.getElementById('label_toggle') as HTMLElement

  if(toggle){
    let checked: boolean = toggle.checked;
    document.body.classList.toggle('dark',checked)

    if(checked){
      label_toggle!.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }else{
      label_toggle!.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  }
}

//Busqueda
buscar(event: Event) {
  const input = event.target as HTMLInputElement;
  this.buscarTermino.emit(input.value); // Emitir el término de búsqueda
}

}
