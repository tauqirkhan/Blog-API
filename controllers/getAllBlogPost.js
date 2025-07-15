const { getAllBlogPostFromDB } = require("../db/query");

const getAllBlogPost = async (req, res) => {
  const postsArray = await getAllBlogPostFromDB();

  return res.status(200).json({ output: postsArray });
};

module.exports = getAllBlogPost;
