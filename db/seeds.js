const db = require("../models");
db.sequelize.sync({force: true}).then() => {
    db.user.bulkCreate([
        {firstName: "TJ", lastName: "Cheet", username: "tjcheet", description: "I'm a cheetah" },
        {firstName: "Melody", lastName: "Kite", username: "mkite", description: "I'm a shoebill" },
        {firstName: "Kondali", lastName: "Kangha", username: "kondkan", description: "I'm a kangeroo" },
        {firstName: "Derek", lastName: "Shoe", username: "dereshoe", description: "I'm a giraffe" },
        {firstName: "Tucker", lastName: "Champ", username: "tchamp", description: "I'm a male duck" },
    ]);
};