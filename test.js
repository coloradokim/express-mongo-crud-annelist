// router.post('/list/:id/update', function (req, res, next) {
//   listCollection.updateById(req.params.id,
//     {title: req.body.title,
//     author: req.body.author,
//     url: req.body.url,
//     post: req.body.post,
//     comments: []}, function (err, record) {
//       if (err) throw err
//     });
//     res.redirect('/list')
// });
//
//
// if (!comments.length)
//
// else
//
// comments: req.body.comments


var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];
var removed = myFish.splice(3, 1)
console.log('removed' + removed);
console.log(myFish);
