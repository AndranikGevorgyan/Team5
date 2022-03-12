const mongoose = require("mongoose");

<<<<<<< HEAD
const UserSchema = mongoose.Schema(
=======
const userSchema = mongoose.Schema(
>>>>>>> features
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
<<<<<<< HEAD
      require: true,
    },
    coins: {
=======
      required: true,
    },
    conins: {
>>>>>>> features
      type: Number,
      default: 0,
    },
    isVerify: {
      type: Boolean,
<<<<<<< HEAD
      default: false,
    },
  },
  { collection: "Users" }
);

const UserModel= mongoose.model('Users', UserSchema);

module.exports = UserModel;
=======
      default: false
    },
  },
  {
    collection: 'Users',
    timestaps: true,
  }
);

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
>>>>>>> features
