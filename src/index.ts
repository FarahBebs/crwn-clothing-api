import express from "express";
import sequelize from "./models";
import User from "./models/User";

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "Failed to create user" });
  }
});

// Sync Sequelize models and start server
sequelize
  .authenticate()
  .then(() => sequelize.sync({ force: true })) // Syncing models, drop the table if exists
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
