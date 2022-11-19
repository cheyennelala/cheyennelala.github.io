function circle(r, myPi)
{
this.r = r;
// area method
this.myArea = function ()
{
    return myPi * this.r * this.r;
};

}

let fName = prompt("Hello what is your name?");
// fnName is where we are storing the users name after prompted
const myPi= 3.1415926;
let myFavNum = prompt("What is your favourite number?")
var c = new circle(myFavNum, myPi);
let message = "".concat("Oh, nice to meet you " + fName + ", is " + myFavNum + " your favourite number. If that was the radius of a circle, the area would be " + c.myArea());
alert(message);
