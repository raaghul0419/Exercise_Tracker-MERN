const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
// has only single field - username
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, // trims whitespace of the end
        minlength: 3
    },
}, {
    timestamps: true, // automatically creates timestamps for when it was created or when it was modified
});

const User = mongoose.model('User', userSchema)
module.exports = User;