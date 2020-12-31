const express = require("express");
const router = express.Router();

const { check } = require("express-validator");
const conferenceController = require("../../controllers/conferenceController");
const auth = require("../../middlewares/auth");

//Conference
//ENDPOINT=api/create-conference
//Return conference
router.post(
  "/",
  //Validation data
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("quota", "La cuota es obligatoria").not().isEmpty(),
    check("isEnabled", "El estado es obligatorio").not().isEmpty(),
  ],
  auth,
  conferenceController.createConference
);

module.exports = router;
