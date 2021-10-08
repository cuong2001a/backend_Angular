import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express();
dotenv.config();

const address = require("./routes/address")
const desk = require("./routes/desk")
const infoTicket = require('./routes/infoTicket')
const infoUser = require('./routes/infoUser')
const train  =require('./routes/train')
const trainCar = require('./routes/trainCar')
const typeTicket = require("./routes/typeTicket")
const time = require('./routes/time')
const typeDesk = require("./routes/typeDesk")



app.use(express.json())
app.use(cors({ credentials: "same origin" }));

app.use('/api',address);
app.use('/api',typeTicket);
app.use('/api',time);
app.use('/api',desk);
app.use('/api',infoTicket);
app.use('/api',infoUser);
app.use('/api',train);
app.use('/api',trainCar);
app.use('/api',typeDesk);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    });
mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
})
const port = process.env.PORT || 3000
app.listen(port ,()=>{
    console.log("Server is running on",port);
})