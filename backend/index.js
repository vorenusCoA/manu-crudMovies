const express = require("express");
const conectarDB = require("./config/db");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;


conectarDB()
app.use(express.json())
app.use(cors())
app.use("/api/peliculas", require("./routes/pelicula"))

app.use("/", express.static("../frontend/dist/frontend"));

app.listen(port, () =>{
    console.log(`Servidor en puerto: ${port}`)

})