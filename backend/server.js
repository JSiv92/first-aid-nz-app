//install express with 'npm install express'

//require the express package
const express = require('express')

//start express app
const app = express()

//ROUTING
app.get('/', (req, res) => {
    res.json({msg:"Welcome"})
})

//listen for requests at port 4000
app.listen(4000, () => {
    console.log('listening on port 4000 with nodemon')
})