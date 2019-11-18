var express = require('express');
var router = express.Router();

var Knight = require('./../models/knight');

router.get('/', function (req, res, next) {
   try {
      Knight.find({removed: false}, function (err, knightList) {         
         res.send(knightList);
      });
   } catch (err) {
      res.send(err);
   }
});

router.get('/heroes', function (req, res, next) {
   try {
      Knight.find({removed: true}, function (err, knightList) {         
         res.send(knightList);
      });
   } catch (err) {
      res.send(err);
   }
});

router.get('/:id', function (req, res, next) {
   try {     
      Knight.findById(req.params.id, function (err, k) {               
         res.send(k);      
      }); 
   } catch (err) {
      res.send(err);
   }
});

router.post('/post', function (req, res, next) {
   try {
      var knight = new Knight(req.body.data);
      var persisted = knight.save();
      res.send(persisted);
   } catch (err) {
      res.send(err);
   }

});

router.post('/update', function (req, res, next) {
   try {
      var knight = new Knight(req.body.data);
      var persisted = knight.save();
      res.send(persisted);
   } catch (err) {
      res.send(err);
   }

});

router.put('/delete', function (req, res, next) {
   try {      
      Knight.findById(req.body.data, function (err, persisted) { 
         console.log(req.body.data);
         persisted.removed = true;
         persisted.save(persisted);       
      }); 
              
      res.send("persisted");
   } catch (err) {
      res.send(err);
   }

});

router.put('/update', function (req, res, next) {
   try {      
      Knight.findById(req.body.data._id, function (err, persisted) {          
         persisted.nickname = req.body.data.nickname;
         persisted.save(persisted);       
      }); 
              
      res.send("persisted");
   } catch (err) {
      res.send(err);
   }

});

module.exports = router;
