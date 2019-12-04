const db = require("../models");

db.sequelize.sync({ force: true }).then(() => {
    db.post.bulkCreate([
        {
            text: "This is a beautiful post from author 1",
            displayName: "tjlovesham"
        },
        {
            text: "Another beautiful post from author 2",
            displayName: "dereklovesham"
        },
        {
            text: "This is a beautiful post from author 3",
            displayName: "melodylovesham"
        },
        {
            text: "Another beautiful post from author 4",
            displayName: "tuckerlovesham"
        },
        {
            text: "This is a beautiful post from author 5",
            displayName: "shellylovesham"
        },
        {
            text: "Another beautiful post from author 6",
            displayName: "beckylovesham"
        },
        {
            text: "This is a beautiful post from author 7",
            displayName: "kondalilovesham"
        },
        {
            text: "Another beautiful post from author 8",
            displayName: "leisalovesham"
        },
        {
            text: "This is a beautiful post from author 9",
            displayName: "chrislovesham"
        },
        {
            text: "Another beautiful post from author 10"
        }
    ]);

    db.comment.bulkCreate([
        {
            text: "this is a comment 1",
            postId: 1
        },
        {
            text: "this is a comment 1",
            displayName: "tjlovesham",
            postId: 2
        }
    ])
});