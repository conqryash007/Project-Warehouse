const Blog = require("./../models/blogModel");

exports.getBlogByid = async (req, res, next) => {
  let sendData;
  try {
    sendData = await Blog.findById(req.params.bid);
  } catch (err) {
    return next(new Error("Something went wrong!"));
  }

  if (!sendData) {
    return next(new Error("Cannot find Blog by id."));
  }

  res.json({ data: sendData.toObject({ getters: true }) });
};

exports.postBlogByid = async (req, res, next) => {
  const { title, content, creator } = req.body;
  const newBlog = new Blog({ title, content, creator });
  try {
    await newBlog.save();
  } catch (err) {
    console.log(err);
    return next(new httpError("Something went wrong !", 500));
  }

  res
    .status(201)
    .send({ status: 201, data: newBlog.toObject({ getters: true }) });
};

exports.editBlogByid = async (req, res, next) => {
  const id = req.params.bid;
  const incData = req.body;

  let blog;
  try {
    blog = await Blog.findById(id);
  } catch (err) {
    return next(new Error("Something went wrong!"));
  }

  if (!blog) {
    return next(new Error("No Blog found!. Please check the details again."));
  }

  if (incData.title) blog.title = incData.title;
  if (incData.content) blog.content = incData.content;
  if (incData.creator) blog.creator = incData.creator;

  try {
    await blog.save();
  } catch (err) {
    return next(new Error("Something went wrong!, Couldn't update blog"));
  }

  res.status(200).json({ status: 201, data: blog.toObject({ getters: true }) });
};
