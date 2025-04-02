const express = require('express')
const cors = require('cors')
const formRote = require('./routes/formRoute')
const app = express();
const dotenv = require('dotenv').config()
app.use(express.static('public'))
// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON request bodies

app.use('/api/register', formRote)

const port = process.env.PORT || 8081
app.listen(port, () =>{
    console.log('listen to port', port)
})
