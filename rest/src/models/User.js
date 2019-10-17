import mongoose from 'mongoose'

const ROLES = {
  BASIC: 'BASIC',
  ADMIN: 'ADMIN',
}

const UserSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true, index: true },
  email: { type: String, required: true, unique: true, index: true},
  password: { type: String, required: true },
  role: {type: String, required: true, default: ROLES.BASIC, enum: Object.values(ROLES) }
}, {
  timestamps: true
})

export default mongoose.model('User', UserSchema)