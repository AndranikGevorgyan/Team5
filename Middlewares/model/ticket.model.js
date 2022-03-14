const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TicketsModel = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    description:{
        type: String,
        trim: true,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    countries:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        enum: [10, 50, 100],
        default: 50,
    }
})

