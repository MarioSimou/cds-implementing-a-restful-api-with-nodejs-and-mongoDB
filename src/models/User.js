import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true, index: true },
  email: { type: String, required: true, unique: true, index: true},
  book_id: [{ 
    type: mongoose.Types.ObjectId, ref: 'Book'
  }]
}, {
  timestamp: true
})

export default mongoose.model('User', UserSchema)