import mongoose from 'mongoose'

 const TypeTicket = mongoose.Schema({
     name:{
         type: String,
         requied: true
     }
 })
 module.exports = mongoose.model("TypeTicket",TypeTicket);