const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

// rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.send("Hello from server!");
});


// port
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('server Running on ' + process.env.DEV_MODE + ' mode port no. ' + PORT)
})