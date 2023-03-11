const mongoose = require("mongoose");
require("dotenv").config();

console.log(process.env.DBURL);

//Connecting to the Database
mongoose
  .connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB.");
  })
  .catch((err) => {
    console.log("Error : " + err);
  });