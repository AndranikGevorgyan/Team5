const userModel = require("../Middlewares/Model/schema/user.schema");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { default: mongoose } = require("mongoose");
require('dotenv/config');
const uuid = require("uuid")

const MailService = require('../api/Services/mail.service');
const userDTO = require('../DTO/user.dto');

async function createUser(req, res) {
  try {
    const { username, password, email, name } = req.body;

    const userExists = await userModel.findOne({ $or: [{ username }, { email }] });
    //Check to user Exists in Database
    if (userExists) {
      res.send("already exists");
      return;
    }
    //Password Hashing
    const hashedPassword = await bcrypt.hash(password, 7);
    const activationLink = uuid.v4();
    const coins = 1000;
    const user = new userModel({
      _id: new mongoose.Types.ObjectId(),
      username: username,
      password: hashedPassword,
      email: email,
      name: name,
      activationLink,
      coins
    });
    user.save();
    MailService.sendActivationMail(email, `${process.env.API_URL}/${activationLink}`)
    res.send({
      message: "Created",
      user: userDTO(user)
    });
  } catch (e) {
    console.log(e);
  }
}

const user_login = (req, res, next) => {
  userModel.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id
            },
            'secret',//process.env.JWT_KEY,
            {
              expiresIn: "1h"
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            token: token
          });
        }
        res.status(401).json({
          message: "Auth failed"
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

const user_delete = (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

module.exports = {
  createUser,
  user_login,
  user_delete,
};
