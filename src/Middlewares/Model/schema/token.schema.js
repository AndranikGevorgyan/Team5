const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const TokenSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "Users"},
    refreshToken: {type: String, required: true}
})

module.exports = mongoose.model("Tokens", TokenSchema);