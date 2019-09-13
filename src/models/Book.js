import mongoose from 'mongoose'

const BookSchema = mongoose.Schema({
  title: { type: String, required: true},
})

export default mongoose.model('Book', BookSchema)