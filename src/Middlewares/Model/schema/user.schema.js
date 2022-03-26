const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({

    _id: mongoose.Schema.Types.ObjectId,
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
    password: {
        type: String,
        required: true
    },
    isActivated: {
        type: Boolean,
        default: false,
    },
    coins: {
        type: Number,
        random: 1000,
    },
    activationLink:{
        type: String,
        required: true
    }

},
    {
        collection: "Users",
        timestaps: true,
    });
// UsersSchema.methods.comparePassword = function (password) {
//     //return bCrypt.compareSync(password, this.hash_password);
//         return bCrypt.compare(password, this.hash_password,)
//};

module.exports = mongoose.model("Users", UsersSchema)