var db = require("../models");

module.exports = function (app) {
  // ---------------------------------- Get Routes
  // Home
  app.get("/home", async function (req, res) {
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

  // Posts
  app.get("/api/posts", async function (req, res) {
    try {
      const posts = await db.post.findAll()
      res.json(posts);
    }
    catch (err) {
      console.log(err)
      res.status(500).end();
    };
  });

  // Users
  app.get("/api/users", async function (req, res) {
    try {
      const users = await db.user.findAll()
      res.json(users);
    }
    catch (err) {
      console.log(err)
      res.status(500).end();
    };
  });

  // Username of a Specific User
  app.get("/api/users/:username", async function (req, res) {
    try {
      const usernames = await db.user.findOne({
        where: {
          username: req.params.username
        }
      })
      res.json(usernames);
    }
    catch (err) {
      console.log(err)
      res.status(500).end();
    };
  });

  // Posts Associated with Specific Username
  app.get("/api/users/:username/posts", async function (req, res) {
    try {
      const { posts } = await db.user.findOne({
        where: {
          username: req.params.username
        },
        include: [db.post]
      })
      res.json(posts);
    }
    catch (err) {
      console.log(err)
      res.status(500).end();
    };
  });

  // Comments Associated with Specific Username
  app.get("/api/users/:username/comments", async function (req, res) {
    try {
      const { posts } = await db.user.findOne({
        where: {
          username: req.params.username
        },
        include: [
          { model: db.post, include: [db.comment] }
        ]
      })

      const comments = [];

      posts.forEach(post => {
        return post.comments.forEach(comment => {
          return comments.push(comment);
        });
      });

      res.json(comments);
      console.log(comments);
    }
    catch (err) {
      console.log(err)
      res.status(500).end();
    };
  });

  // ---------------------------------- Post Routes
  // Posts
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

  // Comment
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

  // Username
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

  // ---------------------------------- Delete Route
  // Delete Post by ID
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