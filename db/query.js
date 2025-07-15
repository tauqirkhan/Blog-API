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

module.exports = {
  addPostToTable,
  getAllBlogPostFromDB,
  getBlogPostByIdFromDB,
};
