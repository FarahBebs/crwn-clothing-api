import { Sequelize } from "sequelize";

// Set up PostgreSQL connection using Sequelize
const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "your-username", // replace with your PostgreSQL username
  password: "your-password", // replace with your PostgreSQL password
  database: "your-database-name", // replace with your database name
});

export default sequelize;
