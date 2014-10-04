/**
 * Created by Rodik on 05/10/2014.
 */

var five = require("johnny-five");
var board = new five.Board({port: 'COM4'});

board.on("ready", function() {
    var robot = new Robot(five);
    this.repl.inject({
        robot: robot
    });
});



function Robot (five) {
    this.base = new five.Servo(9);
    this.first = new five.Servo(10);
    this.second = new five.Servo(11);

    this.animation = new five.Animation(this.second);

    this.reset();
}

Robot.prototype.reset = function () {
    this.to(105,90,90);
    console.log('servos reset');
};

Robot.prototype.fold = function () {
    this.to(105,20,170);
    console.log('servos reset');
};

Robot.prototype.animate = function () {
    this.animation.enqueue({
        cuePoints: [0, 0.25, 0.75, 1],
        keyFrames: [90, { value: 180, easing: "inQuad" }, { value: 0, easing: "outQuad" }, 90],
        duration: 10000
    });
};

Robot.prototype.to = function (b,f,s) {
    this.base.to(b);
    this.first.to(f);
    this.second.to(s);
};

module.exports = Robot;