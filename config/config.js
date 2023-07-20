const dataType = require('sequelize');
const dbName = "users";
const dbuser = "root";
const dbPassword = "";


const sequelize = new dataType(dbName, dbuser, dbPassword, {
    host: "localhost",
    port: 3306,
    dialect: "mysql"
});

const db = {};

db.dataType = dataType;
db.sequelize = sequelize;


//Models table
db.user = require('../models/model')(sequelize,dataType);
db.customers = require('../models/loginModel')(sequelize,dataType);



module.exports = db;
