const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// { 
//     type: 'resistance',
//     name: 'Lateral Pull',
//     duration: 20,
//     weight: 300,
//     reps: 10,
//     sets: 4,
// },

const exerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
    },
    name: {
        type: String,
        trim: true,        
    },    
    duration: {
        type: Number,
    }, 
    distance: {
        type: Number,
    },   
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;