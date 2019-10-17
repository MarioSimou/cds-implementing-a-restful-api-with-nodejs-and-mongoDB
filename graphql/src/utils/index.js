
import mongoose from 'mongoose'

export const formatRequest = fn => (parent,data, ...other) => {
  if(data && data.where && data.where.id) {
    data.where._id = mongoose.Types.ObjectId(data.where.id)
    delete data.where.id
  }

  return fn(parent, data, ...other)
}
