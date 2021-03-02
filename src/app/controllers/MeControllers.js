const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose')
class MeControllers {
    // get coursesStore
    coursesStore(req, res) {
        res.render('search'); 
    }  
}
module.exports = new MeControllers;