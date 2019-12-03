var db = require("../models");

module.exports = function (app) {
  app.get("/", async function (req, res) {
    try {
      const posts = await db.post.findAll(
        {
          raw: true,
          include: db.user
        }
      );

      res.render("index", { posts });
    }
    catch (err) {
      console.log(err)
      res.status(500).end();
    };
  });
};
