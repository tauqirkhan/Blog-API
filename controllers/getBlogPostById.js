const { getBlogPostByIdFromDB } = require("../db/query");

const getBlogPostById = async (req, res) => {
  const { postId } = req.params;

  const post = await getBlogPostByIdFromDB(postId);

  return res.status(200).json({ output: post });
};

module.exports = getBlogPostById;
