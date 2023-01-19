
const subjects =["Accounting","Algebra","Programming","Art","Data Analytics"]

let text = "";

subjects.forEach(myFunction);

document.getElementById("demo").innerHTML = text;
 
function myFunction(item, index) {
  text += item + ",";
}


