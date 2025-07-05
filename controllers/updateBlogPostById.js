const updateBlogPostById = async (req, res) => {
  const { postId } = req.params;

  res
    .status(200)
    .json({ message: `PUT HTTP method on /posts/${postId} resource` });
};

module.exports = updateBlogPostById;
