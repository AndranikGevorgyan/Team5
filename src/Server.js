// const { use } = require("bcrypt/promises");
// const express = require("express");
// const mongoose = require("mongoose");
// const ticketRoutes = require('../src/api/Routes/tickets')
// const authRoutes = require("../src/api/Routes/auth-routes");
// const bodyParser = require("body-parser");

// require("dotenv/config");

// const app = express();
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // server and database connction
// const PORT = process.env.PORT || 3000;
// const DB_CONNCTION = process.env.DB_CONNECTION || 'mongodb+srv://AndranikGevorgyan:<NqQTe0WymqzDs6WX>@cluster0.mmsbi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// async function startServer() {
//   try {
//     app.listen(PORT, () => {
//       console.log(`Server listening on Port --> ${PORT}`);
//     });
//     await mongoose.connect('mongodb+srv://AndranikGevorgyan:NqQTe0WymqzDs6WX@cluster0.mmsbi.mongodb.net/myFirstDatabase?retryWrites=true', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to DB");
//   } catch (error) {
//     console.log(error);
//   }
// }app.use('/registration',authRoutes)

// startServer();
// app.use(bodyParser.json())


const http = require('http');
const app = require('./app');
require('dotenv').config()
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);