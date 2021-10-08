import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema;
const infoTicket = mongoose.Schema({
    train: {
        type: ObjectId,
        ref:"Train",
        required: false
    },
    trainCar: {
        type: ObjectId,
        ref:"TrainCar",
        required: false
    },
    desk:{
        type: ObjectId,
        ref:"DeskTrain",
        requried: false
    },
    address:{
        type: ObjectId,
        ref: "Address",
        required: false
    },
    time:{
        type: ObjectId,
        ref:"Time",
        requried: false
    },
    typeTicket:{
        type: ObjectId,
        ref:"TypeTicket",
        required: false
    },
    user:{
        type: ObjectId,
        ref:"User",
        required: false
    },
    people:{
        type: Number,
        required: true
    }

})
module.exports = mongoose.model("infoTicket", infoTicket);