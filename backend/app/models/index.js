const {Sequelize} = require("sequelize");
const sequelize = new Sequelize("test","root", "", {
    host:"localhost",
    port:3306,
    dialect:"mysql"
})

const Tasks = require("./Task")(sequelize, Sequelize)

sequelize.sync();
module.exports = {sequelize, Tasks}