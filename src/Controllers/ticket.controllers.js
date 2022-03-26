const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')


const TicketModel = require('../Middlewares/Model/schema/ticket.schema');

tickets_get = (req, res, next) => {
    TicketModel.find({ date: req.date })
        .select("likeCount date price")
        .exec()
        .then(tickets => {
            const response = {
                count: tickets.length,
                products: tickets.map(ticket => {
                    return {
                        _id: ticket._id,
                        name: ticket.name,
                        price: ticket.price,
                        date: ticket.date,
                        request: {
                            type: 'GET',
                            url: "http://localhost:3000/tickets/" + ticket._id
                        }
                    };
                })
            };

            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

tickets_post = (req, res, next) => {
    const ticket = new TicketModel({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        description: req.body.description,
        date: req.body.date,
        price: req.body.price,
        countries: req.body.countries,
        quantity: req.body.quantity
    });
    ticket.save()
        .then(result => {
            res.status(201).json({
                message: "Ticket created.",
                result: result
            })
        })
        .catch(error => {
            res.status(500).json({
                error: error
            })
        })
};

tickets_get_byID = (req, res, next) => {
    const id = req.params.ticketID;
    TicketModel.find({
        _id: id
    })
        .exec()
        .then(tickets => {
            res.status(200).json({
                message: 'Ticket by id',
                tickets: tickets,
            })

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });


}

ticket_update = (req, res, next) => {
    const id = req.params.ticketId;
    const data = req.body
    console.log(data)
    // for(let key of data){
    //     changes[key.propName] = ops.value;
    // };
    TicketModel.findOneAndUpdate({ _id: id }, { $set: req.body }, { returnOriginal: false })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Updated",
                body: data
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}


module.exports = {
    tickets_get,
    tickets_post,
    tickets_get_byID,
    ticket_update
}