/* eslint-disable no-undef */
const express = require("express");
const connectDb = require("./src/config/db");
const cors = require("cors");

//Create server
const app = express();

//Connect mongodb(Database)
connectDb();

app.use(express.json({ extended: true }));

//Port
const port = process.env.PORT || 4000;

app.use(cors());

//Import routes
//Auth
app.use("/api/create-user", require("./src/routes/createUser"));
app.use("/api/auth", require("./src/routes/auth"));

//Conference
app.use("/api/create-conference", require("./src/routes/createConference"));
app.use("/api/conference", require("./src/routes/conference"));

//Run server
app.listen(port, "0.0.0.0", () => {
  console.log("server on port=", port);
});
