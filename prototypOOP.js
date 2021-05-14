function Robot(){
    
}
Robot.prototype.work = function(){
    console.log('I am the Robot. I just work.');
}

function CoffeeRobot(){
    this.work = function(){
        console.log('I am the CoffeeRobot. I make  Coffee.');
    }
    }
CoffeeRobot.prototype = Object.create(Robot.prototype);

function RobotDancer(){
    this.work = function() {
        console.log('I am the DancerRobot. I just danc.')
    }
}
RobotDancer.prototype = Object.create(Robot.prototype);

function RobotCoocker(){
    this.work = function(){
        console.log('I am CoockerRobot. I just coock.');
    }
}
RobotCoocker.prototype = Object.create(Robot.prototype);

var robot1 = new Robot();
var robot2 = new CoffeeRobot();
var robot3 = new RobotDancer();
var robot4 = new RobotCoocker();

var robotArray = [robot1, robot2, robot3, robot4];

for(let i = 0; i < robotArray.length; i++) {    
    robotArray[i].work();
}
