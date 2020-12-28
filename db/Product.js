const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String, 
        required: true
    },
    created: {
        type: Date, 
        default: Date.now,
    }
})

module.exports = mongoose.model('Product', productSchema)
