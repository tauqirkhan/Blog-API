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

module.exports = { addPostToTable };
