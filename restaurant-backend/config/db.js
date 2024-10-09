const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();

const connnectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://myDatabase:83DBproject@cluster0.bdapj.mongodb.net/classDB",{
            
        });
        console.log("MongoDB Connected");
    } catch(error){
        console.error('MongoDB connetion failed:',error.message);
        process.exit(1);
    }
}

module.exports = connnectDB;