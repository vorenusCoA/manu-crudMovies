const express = require("express");
const conectarDB = require("./config/db");
const app = express();
const cors = require('cors');


conectarDB()
app.use(express.json())
app.use(cors())
app.use("/api/peliculas", require("./routes/pelicula"))


app.listen(3000, () =>{
    console.log("Servidor en puerto 3000")

})