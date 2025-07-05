const deletePostById = async (req, res) => {
  const { postId } = req.params;

  return res
    .status(200)
    .json({ message: `DELETE HTTP method on ${postId} resource` });
};

module.exports = deletePostById;
