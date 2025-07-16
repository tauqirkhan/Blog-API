const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

const addPostToTable = async (postTitle, postBody, userId = 2) => {
  await prisma.posts.create({
    data: {
      userId,
      postTitle,
      postBody,
    },
  });
};

const getAllBlogPostFromDB = async () => {
  const postsArr = await prisma.posts.findMany();
  return postsArr;
};

const getBlogPostByIdFromDB = async (postID) => {
  const post = await prisma.posts.findUnique({
    where: {
      id: parseInt(postID),
    },
  });

  return post;
};

const updateBlogPost = async (postId, postTitle, postBody) => {
  await prisma.posts.update({
    where: {
      id: parseInt(postId),
    },
    data: {
      postTitle,
      postBody,
    },
  });
};

const deletePostById = async (postId) => {
  await prisma.posts.delete({
    where: {
      id: parseInt(postId),
    },
  });
};

module.exports = {
  addPostToTable,
  getAllBlogPostFromDB,
  getBlogPostByIdFromDB,
  updateBlogPost,
  deletePostById,
};
