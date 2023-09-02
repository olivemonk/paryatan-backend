const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const userRouter = require('./routes/userRoute')
const server = express()




const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
  
// main().then(()=>console.log('Connected to MongoDB')).catch(err => console.log(err))
// async function main() {
//   await mongoose.connect(process.env.MONGO_URI);
// }



server.use(cors())
server.use(express.json())
server.use('/users', userRouter.router)



connectDB().then(() => {
  server.listen(process.env.PORT, () => {
      console.log("listening for requests");
  })
}).catch(err => console.log(err))


// server.listen(process.env.PORT, ()=>{
//   console.log('Server is running at ' + process.env.PORT)
// })