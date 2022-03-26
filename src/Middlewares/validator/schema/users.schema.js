const Joi = require('joi')

const UsersSchema = {
  addUserSchema: {
    body: Joi.object({
      name: Joi.string().min(3).max(255).required(),
      login: Joi.string().min(1).max(255).required(),
      email: Joi.string().min(3).required().email().required(),
      username: Joi.string().min(1).max(255).required(),
      password: Joi.string().min(8).max(255).required(),
    })
  },

  updateUserSchema: {
    body: Joi.object({
      name: Joi.string().min(3).max(255).required(),
      login: Joi.string().min(1).max(255).required(),
      email: Joi.string().min(3).required().email().required(),
      username: Joi.string().min(1).max(255).required(),
      password: Joi.string().min(8).max(255).required(),
    }).min(1).required(),
  }
}

module.exports = UsersSchema