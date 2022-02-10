const express = require("express");
const router = express.Router();
const work = require("./index");

router.get("/", (req, res) => {
  const data = {
    message: "NA",
  };
  res.render("./ejsFiles/index.ejs", { data });
});

router.post("/", async (req, res) => {
  try {
    const formData = req.body;
    const data = await work.getDetails(formData.month, formData.year);
    res.render("./ejsFiles/index.ejs", { data });
  } catch (err) {
    data = {
      message: err.message,
    };
    res.render("./ejsFiles/index.ejs", { data });
  }
});

module.exports = router;
