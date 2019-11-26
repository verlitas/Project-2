const db = require("../models");

db.sequelize.sync({ force: true }).then(() => {
    db.user.bulkCreate([
        { firstName: "TJ", lastName: "Cheet", username: "tjcheet", bio: "I'm a cheetah" },
        { firstName: "Melody", lastName: "Kite", username: "mkite", bio: "I'm a shoebill" },
        { firstName: "Kondali", lastName: "Kangha", username: "kondkan", bio: "I'm a kangeroo" },
        { firstName: "Derek", lastName: "Shoe", username: "dereshoe", bio: "I'm a giraffe" },
        { firstName: "Tucker", lastName: "Champ", username: "tchamp", bio: "I'm a male duck" },
    ]);
});