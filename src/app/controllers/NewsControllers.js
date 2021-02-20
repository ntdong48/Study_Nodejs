class NewsControllers {
    //get /news
    index(req, res) {
        res.render('news');
    }
    show(req, res){
        res.send('aaaaa')
    }
} 
module.exports = new NewsControllers;