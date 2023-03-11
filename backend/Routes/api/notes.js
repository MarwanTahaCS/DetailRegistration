const express = require("express");
const router = express.Router();

//Model
const noteModel = require("../../models/Note");

//@route    GET api/notes
//@desc     Get All notes
//@access   Public
router.route("/").get(async (req, res) => {
  try {
    const result = await noteModel.find({});
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
});

//@route    POST api/notes
//@desc     Post a note
//@access   Public
router.route("/").post(async (req, res) => {
  const note = req.body;
  const Note = new noteModel(note);
  try {
    await Note.save();
    res.json("note added");
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
});

//@route    DELETE api/notes/:id
//@desc     Delete a specific note
//@access   Public
router.route("/:id").delete(async (req, res) => {
  try {
    await noteModel.deleteOne({ _id: req.params.id });
    res.json("Deleted Successfully");
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
});

module.exports = router;
