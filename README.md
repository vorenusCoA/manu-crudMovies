
# crudMovies

Es una aplicacion CRUD creada a partir del MEAN Stack (MongoDB, Express, Angular, Node)

Permite acceder y modificar una base de datos de películas (directores, año de lanzamiento y rating) alojada en la nube de MongoDB.

Basado en el siguiente tutorial: https://www.youtube.com/watch?v=aLbDBaFYoLY&ab_channel=TomasRuizDiaz 

Pueden verla funcionando en el siguiente link: https://crudmovies01.herokuapp.com/

## Instrucciones para correrlo localmente

Instalar node: https://nodejs.org/en/

Clonar el repositorio de GitHub: git clone https://github.com/ManuelGonzalez007/crudMovies.git

Instalar dependencias (dentro de carpeta backend): *npm install*

Instalar dependencias (dentro de carpeta frontend): *npm install*

## Creacion de base de datos en la nube de MongoDB

Es necesario registrarse (es gratuito): https://account.mongodb.com/account/login

Una vez que se tiene una cuenta, seguir los pasos del tutorial “Get Started” para crear un cluster, habilitar la red y crear una DB (primeros tres pasos del tutorial).

Accediendo a Databases -> Connect podremos elegir un método de conexión con la DB (elegir mongoDB compass)

Copiar el string de conexión ya que luego será necesario agregar en el archivo “variables.env” 

(ejemplo: mongodb+srv://usuario:<password>@cluster0.jwxa0.mongodb.net/test)

## Configuracion del archivo variables.env

Dentro de la carpeta backend del codigo, está el archivo variables.env, en donde va a estar la conexion a la base de datos.

[Puede suceder que VSC no reconozca el archivo .env. En ese caso instalar la extension DotENV]

El archivo variables.env solo va a tener una linea de codigo, reemplazar el string existente con el string de conexión a la base de datos (remplazar “/test” con el nombre de la base de datos creada)

Ejemplo: ```DB_MONGO =  "mongodb+srv://usuario:password@cluster0.jwxa0.mongodb.net/peliculas"```

## Levantar app

Levantar el servidor del backend: *npm run dev*

Levantar el servidor de Angular CLI: *npm start*

App disponible en: *localhost:4200*
