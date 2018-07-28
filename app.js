var DSIZE = 1;

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(canvas);

var point = function(x, y){
    var _this = this;
    _this.x = x;
    _this.y = y;
};

var pointA = new point(canvas.width/2, canvas.height * 1/4);
var pointB = new point(canvas.width * 3/4, canvas.height * 3/4);
var pointC = new point(canvas.width/4, canvas.height * 3/4);
var startingPoint = new point(canvas.width/2, canvas.height * 2/4);

c.fillRect(pointA.x, pointA.y, DSIZE, DSIZE);
c.fillRect(pointB.x, pointB.y, DSIZE, DSIZE);
c.fillRect(pointC.x, pointC.y, DSIZE, DSIZE);
c.fillRect(startingPoint.x, startingPoint.y, DSIZE, DSIZE);

var posX = startingPoint.x;
var posY = startingPoint.y;
for(var i = 0; i < 45000; i++){
    var rndNr = getRandomInt(1,6);
    console.log(rndNr);
    if(rndNr <= 2){
        posX = posX + ((pointA.x - posX) * 0.5);
        posY = posY + ((pointA.y - posY) * 0.5);
        c.fillRect(posX, posY, DSIZE, DSIZE);
    }
    if(rndNr > 2 && rndNr <= 4){
        posX = posX + ((pointB.x - posX) * 0.5);
        posY = posY + ((pointB.y - posY) * 0.5);
        c.fillRect(posX, posY, DSIZE, DSIZE);
    }
    if(rndNr > 4)
    {
        posX = posX + ((pointC.x - posX) * 0.5);
        posY = posY + ((pointC.y - posY) * 0.5);
        c.fillRect(posX, posY, DSIZE, DSIZE);
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}