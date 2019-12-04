const db = require("../models");

db.sequelize.sync({ force: true }).then(() => {
    db.user.bulkCreate([
        {
            firstName: "TJ",
            lastName: "Cheet",
            username: "tjcheet",
            bio: "I'm a cheetah"
        },
        {
            firstName: "Melody",
            lastName: "Kite",
            username: "mkite",
            bio: "I'm a shoebill"
        },
        {
            firstName: "Kondali",
            lastName: "Kangha",
            username: "kondkan",
            bio: "I'm a kangeroo"
        },
        {
            firstName: "Derek",
            lastName: "Shoe",
            username: "dereshoe",
            bio: "I'm a giraffe"
        },
        {
            firstName: "Tucker",
            lastName: "Champ",
            username: "tchamp",
            bio: "I'm a male duck"
        }
    ]);

    db.post.bulkCreate([
        {
            text: "This is a beautiful post from author 1",
            userId: 1,
        },
        {
            text: "Another beautiful post from author 1",
            userId: 1,
        },
        {
            text: "This is a beautiful post from author 2",
            userId: 2
        },
        {
            text: "Another beautiful post from author 2",
            userId: 2
        },
        {
            text: "This is a beautiful post from author 3",
            userId: 3
        },
        {
            text: "Another beautiful post from author 3",
            userId: 3
        },
        {
            text: "This is a beautiful post from author 4",
            userId: 4
        },
        {
            text: "Another beautiful post from author 4",
            userId: 4
        },
        {
            text: "This is a beautiful post from author 5",
            userId: 5
        },
        {
            text: "Another beautiful post from author 5",
            userId: 5
        }
    ]);

    db.comment.bulkCreate([
        {
            text: "this is a comment",
            postId: 1,
            userId: 1
        },
        {
            text: "this is a comment",
            postId: 1,
            userId: 2
        },
        {
            text: "this is a comment",
            postId: 1,
            userId: 3
        },
        {
            text: "this is a comment",
            postId: 1,
            userId: 4
        },
        {
            text: "this is a comment",
            postId: 1,
            userId: 5
        },
        {
            text: "this is a comment",
            postId: 2,
            userId: 1
        },
        {
            text: "this is a comment",
            postId: 2,
            userId: 2
        },
        {
            text: "this is a comment",
            postId: 4,
            userId: 1
        },
        {
            text: "this is a comment",
            postId: 4,
            userId: 3
        },
        {
            text: "this is a comment",
            postId: 4,
            userId: 5
        }
    ])
});