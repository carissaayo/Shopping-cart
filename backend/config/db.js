const mongoose = require('mongoose');
require('dotenv').config();
const connectionString =
  "mongodb+srv://carissaajao:olatunjiayo@cluster0.xa8k7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        //   useCreateIndex:true,
        //   useFindAndModify:false,
        });
               console.log(`mongoDB connection SUCCESS`);
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;
