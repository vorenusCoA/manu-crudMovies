export class Pelicula {
    _id?: number;
    titulo: string;
    director: string;
    anio: number;
    rating: number

    constructor(titulo:string, director:string, anio:number, rating: number) {
        this.titulo = titulo,
        this.director = director,
        this.anio = anio,
        this.rating = rating

    }


}