import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, index: true},
    email: {type: String, required: true, unique: true, index: true},
    password: {type: String, required: true,},
    role: {type, String, default: 'BASIC', required: true, enum: ['ADMIN','BASIC']},
}, {timestamps: true})

export default mongoose.Model('User', UserSchema)