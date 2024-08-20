const express = require('express');
const dotenv = require('dotenv');
const databaseConnection = require('./utils/database');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/userRoute');

const cors = require('cors')

databaseConnection();
dotenv.config({path: ".env"});

const app = express();

const corsOption = {
    origin:"https://cipher-schools-mcq-mern.vercel.app/",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };

// const corsOptions = {
//     origin:'https://cipher-schools-mcq-mern.vercel.app/',
//     credentials:true
// }
app.use(cors(corsOptions));
 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());



app.use("/api/v1/user", userRoute); // Prefix the userRoute with /api/v1

const port = process.env.PORT || 8000; // Use uppercase for environment variable

app.listen(port, () => {
    console.log(`Server is running on`);
});
