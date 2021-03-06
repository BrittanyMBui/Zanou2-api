const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
 }, {timestamps: true});

 const Entry = mongoose.model('Entry', entrySchema);
 module.exports = Entry;