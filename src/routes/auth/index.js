const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../../controllers/authController");
const auth = require("../../middlewares/auth");

//Auth user
//ENDPOINT=api/auth
//Return Token

router.post(
  "/",

  //Validation data
  [
    check("email", "Agrega un email validado").isEmail(),
    check("password", "El password debe ser de mínimo 6 caracteres").isLength({
      min: 6,
    }),
  ],

  authController.authUser
);

//Return user
router.get("/", auth, authController.login);
module.exports = router;
