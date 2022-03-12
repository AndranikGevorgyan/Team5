const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
    },
    coins: {
      type: Number,
      default: 0,
    },
    isVerify: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "Users" }
);

const UserModel= mongoose.model('Users', UserSchema);

module.exports = UserModel;
