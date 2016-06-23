var express = require('express');
var router = express.Router();
//var five  = require('johnny-five');
var app = require('../app.js');

router.post('/light', function(req,res) {
	console.log('Light it up');
	res.send('hi');

	// var myServo = new five.Servo(9);
	// myServo.sweep();
	console.log("app is next line");
	console.dir(app);
	app.fireLeds();
	app.moveServo();
	// // this.wait(5000, function(){
	// //   app.myServo.stop();
	// //   app.myServo.center();
	// // });
});

module.exports = router;

