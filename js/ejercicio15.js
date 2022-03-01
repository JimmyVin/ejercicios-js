let  num =0;
let pares =0;
let impares =0;

alert("programa de pares e impares");
 
 for ( cont = 1; cont <= 10; cont++) {
     
    num =Number(prompt("Ingrese el numero " + cont));
    
    if (num % 2 == 0) {

        pares = pares + 1
        
    } else {
         impares = impares + 1
    }
     
 }
alert("El numero de pares es de : " + pares);
alert("El numero de impares es de : " + impares);

document.getElementById("pares").innerHTML = "El numero de pares ingresados es de : " + pares ;
document.getElementById("impares").innerHTML = "El numero de impares ingresados es de : " + impares ;
