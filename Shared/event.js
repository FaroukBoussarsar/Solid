const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var Events = mongoose.model('Event', eventSchema);

module.exports = Events;