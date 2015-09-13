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
    comments: []});
  res.redirect('/list');
});

router.get('/list/:id', function (req, res, next) {
  listCollection.findOne({_id: req.params.id}, function (err, record) {
    res.render('list/show', {thePost: record});
  });
});

router.get('/list/:id/edit', function (req, res, next) {
  listCollection.findOne({_id: req.params.id}, function (err, record) {
    res.render('list/edit', {thePost: record});
  });
});

router.post('/list/:id/update', function (req, res, next) {
  listCollection.updateById(req.params.id,
    {title: req.body.title,
    author: req.body.author,
    url: req.body.url,
    post: req.body.post,
    comments: []}, function (err, record) {
      if (err) throw err
    });
    res.redirect('/list')
});

router.post('/list/:id/delete', function (req, res, next) {
  listCollection.remove({_id: req.params.id}, function(err, record) {
    if (err) throw err
  });
  res.redirect('/list')
});



module.exports = router;
