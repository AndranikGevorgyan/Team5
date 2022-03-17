const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    from: { type: ObjectId, ref: 'users', required: true },
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
        required: true,
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
        enum: [9, 50, 100],
        default: 49,
    },
});

module.exports = mongoose.model('Tickets', TicketSchema)
