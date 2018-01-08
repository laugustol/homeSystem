//import {Board,Leds} from 'johnny-five';
Template.controlArduino.onCreated(function(){
	//const five = require('johnny-five');
	//console.log(five.Board);
	//const bor = new five.Board();
	/*var board = new five.Board({
	  	repl:false
	});
	console.log(board);*/
	//var five = Meteor.npmRequire('johnny-five');
});
Template.controlArduino.helpers({
	isActive(e){
		return false;
	}
});
Template.controlArduino.events({
	'click .btn'(e){
		$(e.target).addClass("orange");
	}
});