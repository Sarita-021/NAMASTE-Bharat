const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required']
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        bcrypt: true
    },
    role: {
        type: String,
        required: [true, "role is required"]
    },
    address: {
        type: String,
        default: "Null"
    },
    phone: {
        type: String,
        required: false,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
    }
}, { timestamps: true })

userSchema.plugin(require('mongoose-bcrypt'), { fields: ['password'], rounds: 4 });

const userModel = mongoose.model('User', userSchema)

module.exports = userModel;