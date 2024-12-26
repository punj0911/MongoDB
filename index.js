var express = require('express');
var router = express.Router();
var userModel =require('../Models/Users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add', function(req, res, next) {
  res.render('Add');
});
router.post('/add', function(req, res, next) {
  var bodydata = {
    uname: req.body.txt1,
    ugender: req.body.txt2,
    umobile: req.body.txt3,
    uemail: req.body.txt4,
    }
    var mydata = userModel(bodydata);
    mydata.save(req.body)
.then(data => {
res.send("Record Added");
})
.catch(err => console.log("Error in Query" + err));
    
});
router.get('/display', function(req, res, next) {
  userModel.find()
  .then(data => {
    console.log(data);
    res.render('display',{mydata:data});
})
.catch(err=>console.log("Error"+err));
});

router.get('/show/:id', function(req, res, next) {
  var myid = req.params.id;
  res.send("URL Data is"+myid);
});

module.exports = router;
