Meteor.startup(function(){
	var five = require('johnny-five');
	//ćonsole.log(five);
    board = new five.Board({repl:false});
    board.on('ready',function(){
    	var leds = new five.Leds([9,10,11]);
    	leds[0].blink(300);
    });
/*
    board.on('error', function (error) {
        console.error('Johnny Five Error', error);
    });

    board.on("ready", Meteor.bindEnvironment(function() {

        var led = new JohnnyFive.Led(13);

        led.blink(500);

    }, "ready"));*/
});