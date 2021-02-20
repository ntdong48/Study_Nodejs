const Course = require('../models/Course');
class SiteControllers {
    //get 
    index(req, res) {
        Course.find({}, function (err, courser) {
            if(!err) {
                res.json(courser);
            }else{
                res.status(500).json({ error: 'message' });
            }
          });
    }   
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteControllers;