
const mongoose= require('mongoose')


// const  dotenv = require('dotenv')

// dotenv.config({
//     path:".env"

// })



const databaseConnection =() =>{
    mongoose.connect('mongodb+srv://net:net@cluster0.khcix7i.mongodb.net/user').then(()=>{
     console.log("momgodb connected")
    }).catch((error)=>{
        console.log(error)
    })

    }

    module.exports=databaseConnection
