import mongoose from 'mongoose';
const TypeDesk = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required : true
    }
})
module.exports = mongoose.model("TypeDesk", TypeDesk)