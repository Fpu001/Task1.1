function luvutovat(a, b) {
    var div = document.getElementById("luvutovat");
    div.innerHTML = "<h3>" + a + " " + b + "</h3>";
    
}
function tulostavastaus() {
   let luku1 = Number(document.querySelector("#luku1").value);
   let luku2 = Number(document.querySelector("#luku2").value);
   let sum = luku1 + luku2;
   document.getElementById("sum").value = sum;
}

function multi() {
   let luku1 = Number(document.querySelector("#luku1").value);
   let luku2 = Number(document.querySelector("#luku2").value);
   let multiply = luku1 * luku2;
   document.getElementById("multiply").value = multiply;
   
}
