const express = require ('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()
// const connectToDB = async function () {
//     await mongoose.connect('mongodb://localhost/users');
//     console.log('Connected to DB');
// }

// connectToDB();

mongoose.connect('mongodb://localhost/users', () => console.log("Database connected"));

app.use(express.json())

app.use(cors())
   
app.use('/patients', routesUrls)

app.listen(4000, () => console.log("server is up and running"))