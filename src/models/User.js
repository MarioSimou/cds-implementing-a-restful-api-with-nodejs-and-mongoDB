import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true  },
  books: [{ 
    type: mongoose.Types.ObjectId, ref: 'Books'
  }]
}, {
  timestamp: true
})

export default mongoose.model('User', UserSchema)