const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    book_cover_image: {
        type: String
    },
    genre: {
        type: String,
        required: true
    },
    writers: {
        type: String
    },
    summary: {
        type: String
    }
    
})


const books = mongoose.model(Books, bookSchema)

module.exports = books