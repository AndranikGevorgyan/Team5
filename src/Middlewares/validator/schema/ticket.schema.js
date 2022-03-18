const Joi = require('joi')

const TicketsSchema = {
    addTicketSchema: {
        body: Joi.object({
            name: Joi.string().min(1).max(255).required(),
            description: Joi.string().min(1).max(255).required(),
            price: Joi.number().min(1).max(3).required(),
            countries: Joi.string().min(3).max(255).required(),
            date: Joi.date().raw().required(),
            quantity: Joi.number().min(1).max(50).required(),

        })
    }
}
module.exports = TicketsSchema
//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