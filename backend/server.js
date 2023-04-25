//install express with 'npm install express'

//require dotenv for secrets
require('dotenv').config()


//require the express package
const express = require('express')

//product routes in routes/products.js
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



//listen for requests using dotenv PORT
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000 with nodemon')
})

