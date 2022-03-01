let radio =0;
let area =0;
let perimetro =0;

 alert(" Hacer un programa que muestre el área y perímetro de un círculo.")

 radio= Number(prompt("Ingrese el valor del radio del circulo"))

 area = 3.14 * Math.pow(radio,2) ;
 perimetro = 2 * 3.14 * radio;

 alert("El valor del area del circulo es " + area);
 alert("El valor del perimetro del circulo es " + perimetro);

 document.getElementById("area").innerHTML = "El valor del area es de : " + area;
 document.getElementById("perimetro").innerHTML = "El valor del perimetro es de : " + perimetro;
 document.getElementById("radio").innerHTML = "El valor del radio es de : " + radio;