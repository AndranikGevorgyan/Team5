const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TicketSchema = new Schema({

    _id: mongoose.Schema.Types.ObjectId,

    from: { type: mongoose.ObjectId, ref: 'Users', required: false },
    name: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    date: {
        type: Date,
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
    countries: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 50,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments'
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Likes'
    }]
});

module.exports = mongoose.model('Tickets', TicketSchema)
