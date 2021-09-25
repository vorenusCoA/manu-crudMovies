import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPeliculaComponent } from './agregar-pelicula/agregar-pelicula.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';

const routes: Routes = [
  {path:"", component: ListadoPeliculasComponent},
  {path:"agregar-pelicula", component: AgregarPeliculaComponent},
  {path:"editar-pelicula/:id", component: AgregarPeliculaComponent},
  {path:"**", redirectTo:"", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
