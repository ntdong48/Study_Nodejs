const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose')
class SiteControllers {
    //get 

    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course  => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next);
    }
    // get create
    create(req, res, next) {
        res.render('courses/create'); 
    } 

    // post store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoID}/hqdefault.jpg`
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            });
    } 
}
module.exports = new SiteControllers;