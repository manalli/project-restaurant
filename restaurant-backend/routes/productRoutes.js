const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded());

// Get All
router.get('/', async (req, res) => {
    try {
        const ans = await Product.find();
        res.json(ans);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching products', error: error.message });
    }
});

//Create
router.post('/order', async(req,res)=>{
    const {dishName,rate,description,rating,quantity,image} = req.body;
    const newDish = new Product({dishName,rate,description,rating,quantity,image});
    const savedProduct = await newDish.save();
    res.status(201).json(savedProduct);
});



module.exports = router;