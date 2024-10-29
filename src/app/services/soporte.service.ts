import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ContactoComponent } from '../modules/producto/pages/contacto/contacto.component';

@Injectable({
  providedIn: 'root'
})
export class SoporteService {
  private soporteCollection = 'soporte';

  constructor(private firestore: AngularFirestore) {}

  enviarMensajeSoporte(data: any): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection(this.soporteCollection).doc(id).set(data);
  }
}
