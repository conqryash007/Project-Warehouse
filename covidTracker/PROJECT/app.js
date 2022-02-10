const express = require("express");
const path = require("path");
const serveFiles = require("./serveFile");
const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/static", express.static("static"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/", serveFiles);

//Start the server
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
