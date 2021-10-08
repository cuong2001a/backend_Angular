import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema
const  Train = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: ObjectId,
        ref:'Address',
        required:false
    },
    time:{
        type: ObjectId,
        ref:"Time",
        required: true
    },
    typeTicket:{
        type: ObjectId,
        ref:'TypeTicket',
        required: true
    }
})
module.exports = mongoose.model("Train",Train)