const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const CommentsSchema = new Schema({
    from: { type: ObjectId, ref: 'users', required: true },
    to: { type: ObjectId, ref: 'tickets', required: true },
    comment: { type: String, required: true }
});

module.exports = mongoose.model('Comment', CommentsSchema)