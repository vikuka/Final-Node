// Importamos Mongoose para crear la conexion a la DB de mongoDB.
const mongoose= require("mongoose")

// Contamos la DB utilizamos el metodo connect() de mongoose.
const mongoDBURL= 
"mongodb+srv://vickyamaguana:Vanessa293560!!@cluster0.nhsxy5s.mongodb.net/project";


// Funcion para conectarnos con la DB
function connectDB() {
    return new Promise((res, rej) => {
      // Conectar a la base de datos usando la URL proporcioanada
      mongoose
        .connect(mongoDBURL)
        .then(() => {
          console.log("Conexion a la DB establecida correctamente");
          // Si la conexion es exitosa resolvemos la promesa-
          res();
        })
        .catch((err) => {
          // Si hay un error al conectar, imprimir el error y rechazar la promesa
          console.error("Error al conectar a la DB ", err);
          rej(err);
        });
    });
  }
  
  //Exportamos la funcion de la conexion a la base de datos para poder utilizarla en el app.js
  module.exports = connectDB;