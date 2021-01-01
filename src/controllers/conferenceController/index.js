const Conference = require("../../models/Conference");
const { validationResult } = require("express-validator");

exports.createConference = async (req, res) => {
  //Check errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(500).json({ errors: errors.array() });
  }

  try {
    const inputConference = req.body;
    const conference = new Conference(inputConference);
    await conference.save();
    res.json({ conference });
  } catch (error) {
    console.log("error:createConference =>", error);
    res.status(500).json({ msn: "Ocurrió un error al crear la conferencia" });
  }
};

exports.updateConference = async (req, res) => {
  //Check errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(500).json({ errors: errors.array() });
  }
  try {
    const { _id } = req.body;
    const conference = await Conference.findOneAndUpdate({ _id }, req.body, {
      new: true,
    });

    return res.json(conference);
  } catch (error) {
    console.log("error:updateConference =>", error);
    res.status(500).json({ msn: "Ocurrió un error al editar la conferencia" });
  }
};
exports.deleteConference = async (req, res) => {
  //Check errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(500).json({ errors: errors.array() });
  }
  try {
    const { id } = req.body;
    await Conference.findOneAndDelete({ _id: id });
    return res.json({
      status: true,
      msn: "Conferencia eliminada satisfactoriamente",
    });
  } catch (error) {
    console.log("error:deleteConference =>", error);

    res
      .status(500)
      .json({ msn: "Ocurrió un error al eliminar la conferencia" });
  }
};

exports.getConferences = async (req, res) => {
  try {
    const conferences = await Conference.find({});
    return res.json(conferences);
  } catch (error) {
    console.log("error:getConferences =>", error);

    res
      .status(500)
      .json({ msn: "Ocurrió un error la enviar las conferencias" });
  }
};
