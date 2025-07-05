const getAllBlogPost = async (req, res) => {
  return res.status(200).json({ message: "GET HTTP method on /post resource" });
};

module.exports = getAllBlogPost;
