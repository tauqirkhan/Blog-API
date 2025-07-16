const { deletePostById } = require("../db/query");

const deletePost = async (req, res) => {
  const { postId } = req.params;

  await deletePostById(postId);

  return res
    .status(200)
    .json({ message: `DELETE HTTP method on ${postId} resource` });
};

module.exports = deletePost;
