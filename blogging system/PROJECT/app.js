const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const app = express();
const blogRouter = require("./routes/blogRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  next();
});

app.use("/blog", blogRouter);

app.use((req, res, next) => {
  return next(new Error("Could not find the route"));
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }

  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Something went wrong !" });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2n8ck.mongodb.net/blogs?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(process.env.PORT || 3000);
    console.log("Server started successfully👍");
  })
  .catch((err) => {
    console.log(err.message);
  });
