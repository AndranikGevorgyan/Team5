

const LikeModel = require('../Middlewares/Model/schema/like.tickets.schema')
const TicketModel = require('../Middlewares/Model/schema/ticket.schema');
const { default: mongoose } = require('mongoose');


like_tickets = (req, res, next) => {

    const ticketId = req.params.to;
    if (mongoose.Types.ObjectId.isValid(ticketId)) {
        return res.status(400).send({
            message: "Invalid Ticket Id"
        })
    }
    TicketModel.findOne({ _id: ticketId })
        .then(() => {
            try{const currentUser = req.user;
            LikeModel.findOne({
                from: currentUser._id,
                to: ticketId
            })
                .then(async (ticket_like) => {
                    if (!ticket_like) {
                        const new_like = new LikeModel({
                            from: currentUser._id,
                            to: ticketId
                        })
                        let likeData = await new_like.save();
                        await TicketModel.updateOne({
                            _id: ticketId
                        }, {
                            $: { likes: likeData._id }
                        })
                        return res.status(200).send({
                            message:"Like successfully added"
                        })
                    }else{
                        await LikeModel.deleteOne({
                            _id: ticket_like._id
                        })
                        await TicketModel.updateOne({
                            _id: ticket_like.to
                        }, {
                            $: { likes: ticket_like._id }
                        })
                    }
                }).catch(error => {
                    res.status(403).json({
                        error: error
                    })

                }).catch(error => {
                    res.status(403).json({
                        error: error
                    })
                })}catch(err){
                    return res.status(400).send({
                        message:err.message,
                        data: err
                    })
                }
        })
}
module.exports = like_tickets;