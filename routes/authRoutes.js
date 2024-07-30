// Importamos express y creamos un router.

const express = require("express");
const router = express.Router();

// Importamos el controlador de authRoutes.

const authController = require("../controllers/authController");

// Rutas para al Auth del User.

router.post("/login", authController.login);
router.post("/logout", authController.logout);

module.exports = router;