import mongoose from 'mongoose'

const ROLES = {
  BASIC: "BASIC",
  ADMIN: "ADMIN",
}

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, index: true, unique: true},
  email: {type: String, required: true, index: true, unique: true},
  password: { type: String, required: true },
  role: { type: String, default: ROLES.BASIC , enum: Object.values(ROLES)}
}, {
  timestamps: true
})

export default mongoose.model('User', userSchema )