function Robot(){
    this.text = 'I am the Robot. I just work.';
    this.work = function(){
        console.log(this.text);
    };
}
function CoffeeRobot(){
    Robot.call(this);
    this.text = 'I am the CoffeeRobot. I make  Coffee.'
}
function RobotDancer(){
    Robot.call(this);
    this.text = 'I am the DancerRobot. I just danc.'
}
function RobotCoocker(){
    Robot.call(this);
    this.text = 'I am CoockerRobot. I just coock.'
}


var robot1 = new Robot();
var robot2 = new CoffeeRobot();
var robot3 = new RobotDancer();
var robot4 = new RobotCoocker();

var robotArray = [robot1, robot2, robot3, robot4];

for(let i = 0; i < robotArray.length; i++) {    
    robotArray[i].work();
}

