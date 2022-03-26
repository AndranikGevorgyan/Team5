const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const userRouts = require('./api/Routes/auth-routes');
const ticketRouts = require('./api/Routes/tickets')

mongoose.connect('mongodb+srv://AndranikGevorgyan:NqQTe0WymqzDs6WX@cluster0.mmsbi.mongodb.net/myFirstDatabase?retryWrites=true');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/registration', userRouts);
app.use('/tickets',ticketRouts)
module.exports = app