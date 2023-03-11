const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
  title: String,
  content: String,
});

const NoteModel = mongoose.model("keepr", NoteSchema);

module.exports = NoteModel;
