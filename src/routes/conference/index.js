const express = require("express");
const router = express.Router();

const { check } = require("express-validator");
const conferenceController = require("../../controllers/conferenceController");
const auth = require("../../middlewares/auth");

//Conference
//ENDPOINT=api/conference

router.get(
  "/",

  conferenceController.getConferences
);
//Edit
router.put(
  "/",
  //Validation data
  auth,
  conferenceController.updateConference
);

//Delete
router.delete(
  "/",
  //Validation data
  [check("id", "El id es obligatorio").not().isEmpty()],
  auth,
  conferenceController.deleteConference
);

module.exports = router;
