const mongoose = require('mongoose');

// Our Schema
const ArcadeGameSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    rating: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        enum: ['fighting', 'sports', 'strategy', 'puzzle', 'arcade', 'platformer', 'other'],
        default: 'fighting',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ArcadeGame', ArcadeGameSchema);