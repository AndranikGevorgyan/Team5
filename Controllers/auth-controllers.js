const userModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");


async function createUser(req, res) {
  try {
    const { username, password, email } = req.body;
    const userExists = await userModel.findOne({$or:[{username}, {email}]});
    //Check to user Exists in Database
    if (userExists) {
      res.send("alredy exists");
      return;
    }
    //Password Hashing
    const hashedPassword = await bcrypt.hash(password, 7);
    const user = new userModel({
      username: username,
      password: hashedPassword,
      email: email,
    });
    user.save();
    res.send("user success created");
  } catch (e) {
    console.log(e);
  }
}

module.exports = { createUser };
