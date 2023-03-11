require("./dbconnect");
const express = require("express");
const cors = require("cors");
const app = express();
const notes = require("./Routes/api/notes");
const port = process.env.PORT || 3001;

//Middleware
app.use(express.json());
app.use(cors());

//use Routes
app.use("/api/notes", notes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
