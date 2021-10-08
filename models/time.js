import mongoose from 'mongoose'

const Time = mongoose.Schema({
    thoiGianDi: {
        type: Date,
        requied: true
    },
    thoiGianDen: {
        type: Date,
        requied: true
    },
    gio: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Time", Time);