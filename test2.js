var obj = {
  title: 'Standard Lorem Ipsum',
  author: 'Kim Schlesinger',
  url: 'http://s3-ak.buzzfeed.com/static/2013-11/enhanced/webdr01/6/17/original-6760-1383778202-47.jpg',
  post: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  comments:
   [ { commentName: 'Kim', commentText: 'Test Comment', id: 1 },
     { commentName: 'Cat ', commentText: 'meow', id: 2 } ] }


// 1. find the id number of the comment I want to delete
// 2. find the index number of the comment
// 3. splice that comment out of the array using the index number

var findID = function(arr) {
  var index = obj.comments.indexOf(obj.comments.commentName = 'Kim')
  return obj.comments.splice(index, 1)
}
console.log(findID([obj.comments]));


// router.post('/cars/:id/comments/delete', function(req,res,next){
//    cars.findOne({_id: req.params.id}, function(err,doc){
//      var index = doc.comments.indexOf(req.body.comment)
//      doc.comments.splice(index,1);
//      cars.update({_id: req.params.id}, doc, function(err, doc) {
//        res.redirect('/cars/' + req.params.id)
//      })
//    })
//  })
