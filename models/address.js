import mongoose from 'mongoose'

 const Address = mongoose.Schema({
     name:{
         type: String,
         requied: true
     }
 })
 module.exports = mongoose.model("Address",Address);