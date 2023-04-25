//routes for Products

// GET /products --> get all products
// POST /products --> add a product 
// GET /products/:id --> get single product by id
// DELETE /products/:id --> delete single product by id 
// PATCH /products/:id --> update single product by id

//express router is needed 
const express = require('express')
const router = express.Router()



/*----------------------------
        PRODUCT ROUTES
------------------------------*/


//get all products
router.get('/', (req, res) => {
    res.json({msg:'GET ALL PRODUCTS'})
})

//get single product by id
router.get('/:id', (req, res) => {
    res.json({msg:'GET SINGLE WORKOUT BY ID'})
})

//post a new product
router.post('/', (req, res) => {
    res.json({msg:'POST NEW PRODUCT'})
})

//delete a product by id
router.delete('/:id', (req, res) => {
    res.json({msg:'DELETE PRODUCT BY ID'})
})

//update a product
router.patch('/:id', (req, res) => {
    res.json({msg:'UPDATE PRODUCT BY ID'})
})

module.exports = router 