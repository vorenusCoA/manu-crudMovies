const mongoose = require('mongoose');

const PeliculaSchema = mongoose.Schema({
    titulo: {
        type:String,
        require: true
    },
    director: {
        type: String,
        require: true
    },
    anio: {
        type: Number,
        require: true
    },
    rating: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model("Pelicula", PeliculaSchema)