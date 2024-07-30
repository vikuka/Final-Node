// Importamos Mongoose para definir y tener el equema de usuario y el modelo.

const mongoose= require("mongoose")

// Definimos el esquema de usuario utilizado el costructor de Mongoose llamado Schema.

const userSchema = new mongoose.Schema({
    nombre : {
        type : String,
        required: true // El nombre es obligatorio.
    },
    edad : {
        type : Number,
        required: true // La edad es obligatoria.
    },
    email : {
        type : String,
        required: true, // El email es obligatorio.
        unique: true // El correo electronico tiene que ser unico
    },
    contraseña : {
        type : String,
        required: true // La contraseña es obligatoria.
    }

})

// Creamos el modelo user utilizando el esquema definido anteriormente

const User= mongoose.model("User", userSchema)

// Exportamos el modelo User para usarlo en cualquier parte.

module.exports= User
