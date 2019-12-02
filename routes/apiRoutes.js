var db = require("../models");

module.exports = function (app) {
  // Get all examples
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

  
  app.get("/api/users", async function (req, res) {
    try {
      const users = await db.user.findAll()
      res.render("index", { users });
    }
    catch (err) {
      console.log(err)
      res.status(500).end();
    };
  });

  app.get("/api/users/:username", async function (req, res) {
    try {
      const usernames = await db.post.findOne({
        where: {
          id: req.params.username
        }})
        res.render("index", { usernames });
      }
    catch (err) {
      console.log(err)
      res.status(500).end();
    };
  });

  app.get("/api/users/username/:posts", async function (req, res) {
    try {
      const posts = await db.post.findOne({
        where: {
          id: req.params.post
        }})
        res.render("index", { posts });
      }
    catch (err) {
      console.log(err)
      res.status(500).end();
    };
  });

  app.get("/api/users/username/:comments", async function (req, res) {
    try {
      const comments = await db.comment.findOne({
        where: {
          id: req.params.comment
        }})
        res.render("index", { comments });
      }
    catch (err) {
      console.log(err)
      res.status(500).end();
    };
  });

  app.get("/api/posts/postid/:comments", async function (req, res) {
    try {
      const comments = await db.comment.findOne({
        where: {
          id: req.params.comment
        }})
        res.render("index", { comments });
      }
    catch (err) {
      console.log(err)
      res.status(500).end();
    };
  });

  app.get("/api/posts/postid/comments/:commentsid", async function (req, res) {
    try {
      const comments = await db.comment.findOne({
        where: {
          id: req.params.comment
        }})
        res.render("index", { comments });
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
  
  app.post("/api/posts/postid/comments/:commentid", async function (req, res) {
    try {
      const { comments } = req.body;
      const posts = await db.comment.create({
        comments
      });
      res.json("index", { posts });
    }
    catch (err) {
      console.log(err)
      res.status(500).end();
    };
  });
  
  app.post("/api/users/:username", async function (req, res) {
    try {
      const { users } = req.user;
      const posts = await db.user.create({
        users
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