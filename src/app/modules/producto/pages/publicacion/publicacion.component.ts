import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { Publicacion } from 'src/app/models/publicacion';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  publicaciones: Publicacion[] = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.obtenerPublicaciones();
  }

  obtenerPublicaciones(): void {
    this.crudService.obtenerPublicaciones().subscribe((data: Publicacion[]) => {
      this.publicaciones = data;
    });
  }
}

