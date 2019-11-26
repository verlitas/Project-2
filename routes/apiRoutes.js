var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/", async function (req, res) {
    try {
      const posts = await db.post.findAll()
      res.render("index", { posts });
    }
    catch (err) {
      console.log(err)
      res.status(500).end();
    };
  });

  app.get("/api/post", async function (req, res) {
    try {
      const posts = await db.post.findAll()
      res.render("index", { posts });
    }
    catch (err) {
      console.log(err)
      res.status(500).end();
    };
  });

  app.post("/api/posts", async function (req, res) {
    try {
      const { username } = req.body;
      const posts = await db.post.create({
        username
      });
      res.json("index", { posts });
    }
    catch (err) {
      console.log(err)
      res.status(500).end();
    };
  });

  app.delete("/api/posts/:id", async function (req, res) {
    try {
      const posts = await db.post.destroy({
        where: {
          id: req.params.id
        }
      });
      res.json(posts);
    }
    catch (err) {
      console.log(err)
      res.status(500).end();
    };
  });
}