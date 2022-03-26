const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const CommentsSchema = new Schema({
    from: { type: ObjectId, ref: 'Users', required: true },
    to: { type: ObjectId, ref: 'Tickets', required: true },
    comment: { type: String, required: true }
});

module.exports = mongoose.model('Comments', CommentsSchema)