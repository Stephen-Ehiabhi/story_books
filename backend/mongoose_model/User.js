const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique:true,
        required: true
    },
   age: {
        type: Number,
        required: true
    },
    date_of_birth: {
        type: String
    },
    country: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
   role: {
      enum: [admin,user]
    }
    
})


const users = mongoose.model(users, userSchema)

module.exports = users