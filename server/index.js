const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const path = require('path');
const bodyparser = require('body-parser');


//env config
dotenv.config();

//router import
const userRoutes = require('./routes/userRoutes');

//mongodb connection 
connectDB();

// rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// app.set('views', './views');
app.set('view engine', 'js');

// routes
app.use('/api/v1/user', userRoutes)
app.use(cors(
    {
        origin: 'http://localhost:8080/',
        methods: ['GET', 'POST', 'OPTIONS'],
        credentials: true
    }

))

app.get("/", (req, res) => {
    res.send("Hello from server!");

});

// port
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('server Running on ' + process.env.DEV_MODE + ' mode port no. ' + PORT)
})