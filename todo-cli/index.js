const { Sequelize } = require("sequelize");

// Initialize Sequelize with your database connection details
const sequelize = new Sequelize(
  "postgres://postgres:harsh2001@localhost:5432",
  {
    dialect: "postgres",
  }
);

// Define a test function to create a new database
async function test() {
  // Create a new database
  await sequelize.query("CREATE DATABASE Todos;");

  // Log a message to the console to indicate success
  console.log("Database created successfully!");
}

// Call the test function
test();
