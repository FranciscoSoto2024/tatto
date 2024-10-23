import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Publicacion } from 'src/app/models/publicacion';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private rutaCollection = 'publicaciones';

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  obtenerPublicaciones(): Observable<Publicacion[]> {
    return this.firestore.collection<Publicacion>(this.rutaCollection).valueChanges({ idField: 'idPublicacion' });
  }

  crearPublicacion(publicacion: Publicacion): Promise<any> {
    const id = this.firestore.createId();
    return this.firestore.collection(this.rutaCollection).doc(id).set({ ...publicacion, idPublicacion: id });
  }

  actualizarPublicacion(publicacion: Publicacion): Promise<void> {
    return this.firestore.collection(this.rutaCollection).doc(publicacion.idPublicacion).update(publicacion);
  }

  eliminarPublicacion(id: string): Promise<void> {
    return this.firestore.collection(this.rutaCollection).doc(id).delete();
  }

  subirImagen(ruta: string, nombreImagen: string, datos: string): Observable<string> {
    const filePath = `${ruta}/${nombreImagen}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, datos);
  
    return new Observable<string>((observer) => {
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            observer.next(url);
            observer.complete();
          });
        })
      ).subscribe();
    });
  }
  
}
