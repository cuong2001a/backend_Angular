import mongoose from 'mongoose'
const { ObjectId } = mongoose.Schema
const Desk = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    train: {
        type: ObjectId,
        ref: "Train",
        required: false
    },
    toaTau: {
        type: ObjectId,
        ref: "ToaTau",
        required: false
    }
})
module.exports = mongoose.model("Desk", Desk);