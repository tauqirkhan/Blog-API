const { Router } = require("express");
const indexRouter = Router();
const addBlogPost = require("../controllers/addBlogPost");
const getAllBlogPost = require("../controllers/getAllBlogPost");
const updateBlogPostById = require("../controllers/updateBlogPostById");
const deletePostById = require("../controllers/deletePostById");
const getBlogPostById = require("../controllers/getBlogPostById");

indexRouter.get("/posts", getAllBlogPost);
indexRouter.post("/posts", addBlogPost);

indexRouter.get("/posts/:postId", getBlogPostById);
indexRouter.put("/posts/:postId", updateBlogPostById);
indexRouter.delete("/posts/:postId", deletePostById);

// indexRouter.get("/posts/:postId/comments", getCommentsOnBlogPost);

// indexRouter.post("/posts/:postId/comments", postCommentOnBlogPost);

// indexRouter.delete(
//   "/posts/:postId/comments/:commentId",
//   deleteCommentOnBlogPostById
// );

module.exports = indexRouter;
