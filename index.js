const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const userRouter = require('./routes/userRoute')
const server = express()


  
main().then(()=>console.log('Connected to MongoDB')).catch(err => console.log(err))
async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}



server.use(cors())
server.use(express.json())
server.use('/users', userRouter.router)


server.listen(process.env.PORT, ()=>{
  console.log('Server is running at ' + process.env.PORT)
})