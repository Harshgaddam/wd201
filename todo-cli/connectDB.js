// connectDB.js

const Sequelize = require("sequelize");
const username = "postgres";
const password = "harsh2001";
const sequelize = new Sequelize(username, password, {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
