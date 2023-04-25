//install express with 'npm install express'

//require dotenv for secrets
require('dotenv').config()


//require the express package
const express = require('express')

//start express app
const app = express()

//ROUTING
app.get('/', (req, res) => {
    res.json({msg:"Welcome"})
})

//listen for requests using dotenv PORT
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000 with nodemon')
})

