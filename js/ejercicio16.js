let n =0 ;
let sumapares =0;
let sumaimpares =0;
alert('Ingresar un numero y mostrar la suma de todos lo peres e impares desde 0 hasta el numero ingresado');
n= Number (prompt("Ingresar un numero"));

for ( x = 1; x <= n; x++) {

    if (x % 2 == 0) {

        sumapares += x;
        
    } else {
         sumaimpares += x;
    }
    
    
}

alert ("La suma de numeros pares de los numeros ingresados es de : " + sumapares);
alert ("La suma de numeros impares de los numeros ingresados es de : " + sumaimpares);

document.getElementById("sumapares").innerHTML = "La suma de los numeros pares hasta " + x + " es de : " + sumapares;
document.getElementById("sumaimpares").innerHTML = "La suma de los numeros impares hasta " + x + " es de : " + sumaimpares;