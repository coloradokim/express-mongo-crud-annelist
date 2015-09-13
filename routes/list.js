var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/list-demo');
var listCollection = db.get('list');

router.get('/list', function (req, res, next) {
  listCollection.find({}, function(err, records) {
    res.render('list/index', {allPosts: records});
  });
});

router.get('/list/new', function (req, res, next) {
  res.render('list/new');
});


router.post('/list', function (req, res, next) {
  listCollection.insert(
    {title: req.body.title,
    author: req.body.author,
    url: req.body.url,
    post: req.body.post,
    comments: []
  });
  res.redirect('/list');
});



module.exports = router;
