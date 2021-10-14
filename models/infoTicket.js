import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema;
const infoTicket = mongoose.Schema({
    train: {
        type: ObjectId,
        ref:"Train",
        required: true
    },
    trainCar: {
        type: ObjectId,
        ref:"TrainCar",
        required: true
    },
    desk:{
        type: ObjectId,
        ref:"Desk",
        requried: true
    },
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
    },
    people:{
        type: Number,
        required: true
    },
    code:{
        type: String,
        required: true
    }

})
module.exports = mongoose.model("infoTicket", infoTicket);