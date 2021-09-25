const Pelicula = require('../models/Pelicula')

exports.crearPelicula = async (req,res) => {
    try {
        let pelicula = new Pelicula(req.body)
        await pelicula.save()
        res.send(pelicula)
        
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error")
        
    }
    
}

exports.obtenerPeliculas = async (req,res) => {
    try {
        let peliculas = await Pelicula.find()
        res.json(peliculas)
    
        
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error")
        
    }
}

exports.editarPelicula = async (req,res) => {
    try {
        if(req.params.id.length !== 24 ) {
            return res.status(400).json({msg: "ID invalido"})
        }
        let pelicula = await Pelicula.findById(req.params.id)
        console.log(typeof (pelicula._id))
        
        
        if(!pelicula) {
           
            return res.status(404).json({msg: "La pelicula no existe"})
           
        }
      
        
        pelicula = {
            titulo: req.body.titulo,
            director: req.body.director,
            anio: req.body.anio,
            rating: req.body.rating
        }
        pelicula = await Pelicula.findByIdAndUpdate({_id:req.params.id}, pelicula, {new:true})

        res.json(pelicula)
        
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error")
        
    }
}

exports.obtenerPelicula = async (req, res) => {
    try {
        let pelicula = await Pelicula.findById(req.params.id)
        res.json(pelicula)

        
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error")
        
    }

}

exports.eliminarPelicula = async (req, res) => {
    try {
        let pelicula = await Pelicula.findByIdAndDelete(req.params.id)
        
        if(!pelicula) {
            res.status(404).json({msg: "La pelicula no existe"})
        }

        res.json({msg:"Pelicula eliminada"})
        
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error")
    }
}
  