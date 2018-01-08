const five = require('johnny-five');
board = new five.Board({repl:false});
board.on('ready',function(){
    Meteor.methods({
        sendAction(socket,status){
            const leds = new five.Leds([socket]);
            if(status){
                leds[0].off();
            }else{
                leds[0].on();
            }
        }
    });

});