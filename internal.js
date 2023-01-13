


class Areaofcircle {
    constructor(radius, pie) {
        this.radius = radius;



        this.myArea = function () {
            return pie * this.radius * this.radius;
        };

    }
}
const pie= 3.1415926;



var fName= window.prompt("May I know your name");
alert(`Howdy ${name}`)

var myFavNum =window. prompt("Can I also know your favorite number? ")
alert(`${myFavNum} is my favorite number too`)


var circle = new Areaofcircle(myFavNum, pie);
let message = "".concat("Guess what " + fName + ", thanks for telling me " + myFavNum + " is your favourite number. You know if that was the radius of a circle, the area would be " + circle.myArea());
alert(message);



document.getElementById("fName").innerHTML = "hello"