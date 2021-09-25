import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Pelicula } from '../Models/pelicula';
import { PeliculaService } from '../Servicio/pelicula.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
  listaPeliculas: Pelicula[] = []

  constructor(private peliculaService: PeliculaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerPeliculas()
  }

  obtenerPeliculas() {
    this.peliculaService.getPeliculas().subscribe(data =>{
      console.log(data)
      this.listaPeliculas = data
    },error => {
      console.log(error)
    })

  }

  eliminarPelicula(id:any) {
    this.peliculaService.eliminarPelicula(id).subscribe(data =>{
      this.toastr.error("La pelicula fue eliminada exitosamente", "Pelicula eliminada")
      this.obtenerPeliculas()
    
    },error =>{
      console.log(error)
    })
  }

}
