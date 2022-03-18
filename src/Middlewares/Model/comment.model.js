const mongoose = require('mongoose')

// Local Modules
const { CommentsSchema } = require('./schema/comment.schema')

class CommentsModel {
  static create (to, comment, from) {
    const payload = { to, comment, from}
    return CommentsModel.model.create(payload)
  }

  static findOne (query) {
    return CommentsModel.model.findOne(query)
  }

  static getById (_id) {
    return CommentsModel.model.findOne({ _id })
  }

  static updateById (_id, update) {
    const query = { _id }
    const options = { runValidators: true, useFindAndModify: false, new: true }
    return CommentsModel.model.findOneAndUpdate(query, update, options)
  }

  static deleteById (_id) {
    return CommentsModel.model.deleteOne({ _id })
  }
}

CommentsModel.model = mongoose.model('Comments', CommentsSchema)

module.exports = CommentsModel