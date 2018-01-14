const five = require('johnny-five');
board = new five.Board({repl:false});
board.on('ready',function(){
    Meteor.methods({
        sendAction(position,status){
            const leds = new five.Leds([9,10,11]);
            if(status){
                leds[position].off();
            }else{
                leds[position].on();
            }
        }
    });

});