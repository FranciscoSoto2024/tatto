import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SoporteService } from 'src/app/services/soporte.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder,
    public soporteService: SoporteService
  ) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.soporteService.enviarMensajeSoporte(formData)
      .then(() => {
        alert('¡Mensaje enviado correctamente!'); // Muestra la alerta de confirmación
        this.contactForm.reset();
      })
      .catch((error: any) => {
        console.error('Error al enviar el mensaje a la colección Contacto', error);
        alert('Hubo un error al enviar el mensaje. Inténtalo nuevamente.'); // Muestra un mensaje de error en caso de fallo
      });
    }
  }
}
