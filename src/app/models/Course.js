const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 800 },
    image: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    pdatedAt: { type: Date, defauft: Date.now },
});


// const Course = new Schema({
//     name: {type: String, maxLength: 255},
//     description: {type: String, maxLength: 600},
//     image: {type: String, maxLength: 255},
//     createdAt: {type: Date, default: Date.now },
//     updatedAt: {type: Date, defauft: Date.now},   
//   });

module.exports = mongoose.model('Course', Course);
