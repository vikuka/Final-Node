// Importamos el modelo de Mongo

const User = require("../models/User");

//Funcion para encontrar todos los usuarios

function getAllUsers(req,res){
    // Utilizamos el metodo find() de Mongoose para encontrar TODOS los usuarios.
    
    User.find()
    .then((users)=> res.status(200).json(users)) // Emviamos todos los usuarios como respuesta.
    .catch((err)=>{
        console.error(err)
        res.status(500).send("Error al obtener usuarios") // En caso de tener error que nos envie un mensaje al cliente.
    });
}

// Funcion para crear un nuevo usuario.

function createUser(req,res){
    // Extraemos toda la informacion del body de la solicitud.

    const {nombre,edad,email,contraseña} = req.body;

    // Creamos un nuevo usuario con el metodo create() de mongoose.

    User.create({nombre,edad,email,contraseña})
    .then((newUser) => res.status(201).json(newUser)) // Enviamos el nuevo usuario en formato JSON.
    .catch((err)=>{
        console.error(err);
        res.status(500).send("Error al crear Usuario") // En caso de tener error que envie un mensaje al cliente.
    })
}

// Funcion para actualizar un usuario

function updatedUser(req, res) {
    // Obtenemos el id del usuario a actualizar.
    const userId = req.params.id;
  
    // Obtenemos los datos actualizados del body de la req
    const updatedUser = req.body;
  
    // Utilizamos el metodo findByIdAndUpdate() de Mongoose para buscar y actualizar el usuario por ID.
  
    User.findByIdAndUpdate(userId, updatedUser, { new:true }) // Los 3 parametors del metodo son = El Primero cual es el usuario a actualizar, el segundo seria los datos a actualizar, y el tercero hace referencia a que sea actualizado como nuevo
      .then((user) => res.status(200).json(user))
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error al actualizar el usuario"); // En caso de tener error que envie un mensaje al cliente.
      });
  }
  
  
  // Funcion para eliminar un usuario
  
  function deleteUser(req,res){
      // Obtenemos el id del usuario a actualizar.
    const userId = req.params.id;
  
      // Utilizamos el metodo findByIdAndDelete() de Mongoose para buscar y eliminar un usuario por ID.
  
      User.findByIdAndDelete(userId)
      .then(()=> res.status(200).send("Usuario eliminado correctamente")) // Envaimos una confirmacoin al cliente de que el usuario se elimino correctamente
      .catch((err) => {
          console.error(err);
          res.status(500).send("Error al eliminar el usuario"); // En caso de tener error que envie un mensaje al cliente.
        });
      
  }
  
  // Exportamos todas las funciones para su uso en otras partes
  
  module.exports={
      createUser,
      deleteUser,
      getAllUsers,
      updatedUser
  }