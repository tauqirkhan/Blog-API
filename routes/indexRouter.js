const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/posts", getAllBlogPost);
indexRouter.post("/posts", addBlogPost);

indexRouter.get("/posts/:postId", geBlogPostById);
indexRouter.put("/posts/:postId", updateBlogPostById);
indexRouter.delete("/posts/:postId", deletePostById);

indexRouter.get("/posts/:postId/comments", getCommentsOnBlogPost);

indexRouter.post("/posts/:postId/comments", postCommentOnBlogPost);

indexRouter.delete(
  "/posts/:postId/comments/:commentId",
  deleteCommentOnBlogPostById
);

module.exports = indexRouter;
