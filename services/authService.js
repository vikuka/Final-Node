const jwt = require ("jsonwebtoken");

// Almacenamos nuestra clave secreta

const JWT_SECRET = "98340d4914368e0612ce43d67b7c839d0eccae5c3e428860931e12a650968978";

// Creamos una funcion para generar un token JWT

function generateToken(user) {
  const payload = {
    userId: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  return token
}

module.exports= {
    generateToken
}