let numero1 = 0;
let numero2 = 0;
let numero3 = 0;

alert(" Ingresar tres números enteros y mostrar el mayor de ellos.");

numero1 = Number(prompt("Ingrese el primer numero"));
numero2 = Number(prompt("Ingrese el segundo numero"));
numero3 = Number(prompt("Ingrese el tercer numero"));

document.getElementById("numero1").innerHTML = "El primer numero ingresdos es : " + numero1;
document.getElementById("numero2").innerHTML = "El segundo numero ingresdos es : " + numero2;
document.getElementById("numero3").innerHTML = "El tercer numero ingresdos es : " + numero3;

if (numero1 > numero2 & numero1>numero3) {

    alert("El numero mayor es : " + numero1);
    document.getElementById("mayor").innerHTML = "El numero mayor es : " + numero1;
    
} else {
    if (numero2 > numero1 & numero2 > numero3) {

        alert("El numero mayor es : " + numero2);
        document.getElementById("mayor").innerHTML = "El numero mayor es : " + numero2;
        
    } else {

        alert("El numero mayor es : " + numero3);
        document.getElementById("mayor").innerHTML = "El numero mayor es : " + numero3;
        
    }
    
}