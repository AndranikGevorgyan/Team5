const express = require("express");
const mongoose = require("mongoose");
<<<<<<< HEAD
const authRouter = require("./Routes/auth-routes")
=======
const authRoutes = require('./Routes/auth-routes')
>>>>>>> features
require("dotenv/config");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

<<<<<<< HEAD
app.use('/auth',authRouter)
=======

app.use('/auth',authRoutes)
>>>>>>> features

// server and database connction
const PORT = process.env.PORT;
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
