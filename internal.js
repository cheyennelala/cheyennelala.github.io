


function circle(radius,pie) 
{
this.radius= radius



this.myArea = function ()
{
    return pie* this.radius * this.radius;
};

}


var fName= window.prompt("Enter your name");
alert(`hello ${name}`)



const pie= 3.1415926;





var myFavNum =window. prompt("whats your favourite number")
var c = new circle(myFavNum, pie);


let message = "".concat("Hey " + fName + ", you entered " + myFavNum + " as your favourite number. If that was the radius of a circle, the area would be " + c.myArea());
alert(message);



document.getElementById("fName").innerHTML = "Hello";