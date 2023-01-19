
var myfavnum=window.prompt("Pick a number between 5 and 20");
let txt="";
let num=1;
do { 
    txt+="<br>"+num;
    num++;
}
while (num <= myfavnum);
document.getElementById("demo").innerHTML = txt;
