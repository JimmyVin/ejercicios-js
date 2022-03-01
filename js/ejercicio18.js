
let mayor = 0;;
let numeros = 0;

alert('Hacer un programa que muestre el mayor de 10 números ingresados')

for ( i = 1; i <= 10; i++) {
    numeros = Number(prompt('ingrese numero ' + i));
    
    if (numeros> mayor) {
        mayor = numeros;
    }
    
}

alert("El numero mayor es " + mayor)

document.getElementById("mayor").innerHTML = "El numero mayor de los 10 numeros ingresados es : " + mayor;