var db = require("../models");

module.exports = function (app) {
  app.get("/", async function (req, res) {
    try {
      const posts = await db.post.findAll(
        {
          raw: true,
          include: [db.comment]
        }
      );
      const sortedPosts = posts.sort((a, b) => b.createdAt - a.createdAt);
      res.render("index", { sortedPosts });
    }
    catch (err) {
      console.log(err)
      res.status(500).end();
    };
  });
};
