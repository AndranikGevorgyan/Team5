const Joi = require('joi')

const UsersSchema = {
    addUserSchema: {
        body: Joi.object({
            login: Joi.string().min(1).max(255).required(),
            email: Joi.string().min(3).required().email().required(),
            name: Joi.string().min(1).max(255).required(),
            password: Joi.string().min(8).max(255).required(),
            coins: Joi.number().integer()
        })
    }
}

module.exports = UsersSchema