function calculateTip() {
    var mealprice = document.getElementById("billamt").value;
    var service = document.getElementById("service").value;


    if (mealprice === "" || service == 0) {
      alert("Enter bill here please");
      return;
    }
   if (mealprice<5){
    alert("error:")
   }
   if(mealprice>500){
    alert("error:")
   }

    var total = (mealprice * service)

    total = Math.round(total * 100) / 100;
   
    total = total.toFixed(2);
  
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  
  }
  
 
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  

  document.getElementById("calculate").onclick = function() {
    calculateTip();
    
  }


  

  