const {Sequelize} = require("sequelize");
// const connection = new Sequelize(process.env.DB_URI);



let connection;
if (process.env.NODE_ENV === "production") {
    // heroku connection
} else if (process.env.NODE_ENV === "devmysql") {
    // mysql connection
} else if (process.env.NODE_ENV === "devsqlite") {
    connection = new Sequelize ({
        dialect: 'sqlite',
        storage: 'data.db'
    });
};

module.exports = connection;