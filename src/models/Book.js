import mongoose from 'mongoose'

const BookSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true, index: true },
  abstract: { type: String, required: true },
  genre: [{ type: String, required: true }],
  author_id: [{
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }]
})

export default mongoose.model('Book', BookSchema)