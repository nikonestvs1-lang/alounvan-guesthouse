const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: Number,
        required: true,
        unique: true
    },
    roomType: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['available', 'booked', 'maintenance'],
        required: true
    },
    building: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;