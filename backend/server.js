//install express with 'npm install express'

//require dotenv for secrets
require('dotenv').config()


//require the express package
const express = require('express')
//require the mongoose package
const mongoose = require('mongoose')



//product routes in routes directory: routes/products.js
const productRoutes = require('./routes/products')





//start express app
const app = express()



//middleware
app.use(express.json()) //to read json

app.use((req, res, next) => {
    //logs path of requests in console
    console.log(req.path, req.method)
    next()
})



//ROUTING: grabs all routes configured in routes/products.js
app.use('/api/products', productRoutes)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {

    //listen for requests using dotenv PORT
    app.listen(process.env.PORT, () => {
        console.log('listening on port 4000 with nodemon dev script and MONGO DB CONNECTED')
    })

  })
  .catch((error) => {
    console.log(error)
  })    





