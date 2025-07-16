const { updateBlogPost } = require("../db/query");

const updateBlogPostById = async (req, res) => {
  const { postId } = req.params;
  const { postTitle, postBody } = req.body;

  await updateBlogPost(postId, postTitle, postBody);

  res
    .status(200)
    .json({ message: `PUT HTTP method on /posts/${postId} resource` });
};

module.exports = updateBlogPostById;
