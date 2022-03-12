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
      required: true,
    },
    conins: {
      type: Number,
      default: 0,
    },
    isVerify: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "Users",
    timestaps: true,
  }
);

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;
