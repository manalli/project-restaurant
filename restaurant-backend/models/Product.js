const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    dishName: {type: String, required: true},
    rate: {type: Number, required: true},
    description: {type: String, required: true},
    rating: {type: Number, required: true},
    image: {type: String,required: true},
    quantity: {type:Number, required: true},
});

module.exports = mongoose.model('Product',schema);