import mongoose from 'mongoose'

const User = mongoose.Schema({
    nameUser: {
        type: String,
        requied: true
    },
    cmnd: {
        type: Number,
        requied: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        maxLength: 13
    },
    email:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model("User", User);