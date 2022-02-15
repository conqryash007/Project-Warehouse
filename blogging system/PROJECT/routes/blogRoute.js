const express = require("express");
const router = express.Router();
const blogController = require("./../controller/blogController");

router.get("/:bid", blogController.getBlogByid);

router.post("/", blogController.postBlogByid);

router.patch("/:bid", blogController.editBlogByid);

module.exports = router;
