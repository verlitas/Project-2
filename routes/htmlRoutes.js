var db = require("../models");

module.exports = function (app) {
  app.get("/", async function (req, res) {
    try {
      const posts = await db.post.findAll({ raw: true });
      const comments = await db.comment.findAll({ raw: true });

      const sortedPostsWithComments = posts.map((post) => {
        const postComments = comments.filter((comment) => {
          return comment.postId === post.id;
        }).sort((a, b) => b.createdAt - a.createdAt);

        return {
          ...post,
          comments: postComments
        }
      }).sort((a, b) => b.createdAt - a.createdAt);

      res.render('index', { sortedPostsWithComments });
    }
    catch (err) {
      console.log(err)
      res.status(500).end();
    };
  });
};
