const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./Routes/auth-routes")

require("dotenv/config");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// server and database connction
const PORT = process.env.PORT || 3000;
const DB_CONNCTION = process.env.DB_CONNECTION;

async function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`Server listening on Port --> ${PORT}`);
    });
    await mongoose.connect(DB_CONNCTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
}

startServer();