var express = require('express');
var router = express.Router();
var five  = require('johnny-five');
// var board = new five.Board();
var app = require('../app.js');
// var mongoose = require('mongoose');
// var Superhero = mongoose.model('superheros');

router.get('/superheros', function(req,res){
	// Superhero.find(function(err, superheros) {
	// 	console.log(superheros);
	// 	res.render('api',
	// 		{
	// 			title: 'Superhero API',
	// 			superheros: superheros
	// 		}
	// 	);
	// });
});

router.post('/superheros', function(req,res) {
	// new Superhero({name: req.body.name})
	// .save(function(err, superhero) {
	// 	console.dir(superhero);
	// 	res.redirect('/api/superheros');
	// });
});

router.post('/light', function(req,res) {
	console.log('Light it up');
	res.send('hi');
	var delay = 1000;
	var ledPins = [2,4,6,8,10,12];
	var leds = new five.Leds(ledPins);
	leds.on();
});

module.exports = router;