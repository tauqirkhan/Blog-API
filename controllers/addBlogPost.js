const { addPostToTable } = require("../db/query");

const addBlogPost = async (req, res) => {
  const { postTitle, postBody } = req.body;

  await addPostToTable(postTitle, postBody);

  return res.status(200).json({ message: "Blog post added successfully" });
};

module.exports = addBlogPost;
