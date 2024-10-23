import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Publicacion } from 'src/app/models/publicacion';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  publicaciones: Publicacion[] = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.obtenerPublicaciones().subscribe((data: Publicacion[]) => {
      this.publicaciones = data;
    });
  }

  editarPublicacion(publicacion: Publicacion): void {
    // Lógica para editar la publicación (abrir modal, etc.)
  }

  eliminarPublicacion(id: string): void {
    this.crudService.eliminarPublicacion(id).then(() => {
      console.log('Publicación eliminada');
    }).catch(error => {
      console.error('Error al eliminar la publicación', error);
    });
  }
}
