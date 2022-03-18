const Joi = require('joi')

const ID = Joi.string().hex().length(24)

const CommentsSchema = {
  addSchema: {
    body: Joi.object({
      userId: ID.required(),
      comment: Joi.string().required()
    })
  },

  updateSchema: {
    body: Joi.object({
      comment: Joi.string().required()
    })
  }
}

module.exports = CommentsSchema