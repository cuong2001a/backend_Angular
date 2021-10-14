import mongoose from 'mongoose'

 const TypeTicket = mongoose.Schema({
     name:{
         type: String,
         required: true
     },
     price:{
         type: Number,
         required: true
     }
 })
 module.exports = mongoose.model("TypeTicket",TypeTicket);