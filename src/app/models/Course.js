const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, required: true, },
    description: { type: String },
    image: { type: String },
    videoID: { type: String, required: true, },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
},{
    timestamps: true, 
});


// const Course = new Schema({
//     name: {type: String, maxLength: 255},
//     description: {type: String, maxLength: 600},
//     image: {type: String, maxLength: 255},
//     createdAt: {type: Date, default: Date.now },
//     updatedAt: {type: Date, defauft: Date.now},   
//   });

module.exports = mongoose.model('Course', Course);
