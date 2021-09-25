import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from '../Models/pelicula';
import { ToastrService } from 'ngx-toastr';
import { PeliculaService } from '../Servicio/pelicula.service';

@Component({
  selector: 'app-agregar-pelicula',
  templateUrl: './agregar-pelicula.component.html',
  styleUrls: ['./agregar-pelicula.component.css']
})
export class AgregarPeliculaComponent implements OnInit {
  peliculaForm: FormGroup;
  titulo = "AGREGAR PELICULA";
  boton = "Agregar"
  id:string | null;

  constructor(private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService, private peliculaService: PeliculaService, private aRouter: ActivatedRoute)  { 
    this.peliculaForm = this.formBuilder.group({
      titulo:["", Validators.required],
      director: ["", Validators.required],
      anio: ["", Validators.required],
      rating: ["", Validators.required]  
    })
    this.id = this.aRouter.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    this.esEditar()
  }

  agregarPelicula() {
    //console.log(this.peliculaForm.value)
    const PELICULA: Pelicula = {
      titulo:this.peliculaForm.get('titulo')?.value,
      director:this.peliculaForm.get('director')?.value,
      anio:this.peliculaForm.get('anio')?.value,
      rating:this.peliculaForm.get('rating')?.value
    }
    if(this.id !== null) {
      //editamos      
      this.peliculaService.editarPelicula(this.id, PELICULA).subscribe(data =>{
        this.toastr.success('Pelicula editada exitosamente', 'Pelicula editada');
        this.router.navigate(["/"])

      }, error =>{
        console.log(error)
        this.peliculaForm.reset()
      })
    } else {
      console.log(PELICULA)
    this.peliculaService.guardarPelicula(PELICULA).subscribe(data=>{
      this.toastr.success('Pelicula agregada', 'Nuevo registro guardado');
      this.router.navigate(["/"])

    }, error=>{
      console.log(error)
      this.peliculaForm.reset()
    }) 

    }
    

  }

  esEditar() {
    if(this.id !== null) {
      this.titulo = "EDITAR PELICULA"
      this.boton = "Editar"
      this.peliculaService.getPelicula(this.id).subscribe(data=> {
        this.peliculaForm.setValue({
          titulo: data.titulo,
          director: data.director,
          anio: data.anio,
          rating: data.rating
        })
      })
    }
  }



}
