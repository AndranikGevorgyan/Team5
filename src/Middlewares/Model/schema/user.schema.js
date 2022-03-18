const mongoose = require('mongoose');
const bCrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    username: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    hash_password: {
        type: String
    },
    isVerify: {
        type: Boolean,
        default: false,
    },
    coins: {
        type: Number,
        random: 1000,
    },

},
    {
        collection: "Users",
        timestaps: true,
    });
UsersSchema.methods.comparePassword = function (password) {
    return bCrypt.compareSync(password, this.hash_password);

};

module.exports = mongoose.model("User", UsersSchema)