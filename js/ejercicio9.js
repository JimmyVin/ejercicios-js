let veces = 0;
let cont = 0;
let suma=0;
alert('La suma de n números naturales, donde n es el numero limite que ingresa el usuario')
veces= Number(prompt("Ingrese el numero de veces que se va a sumar"))

cont=1;
while (cont <= veces) {

    suma=suma + cont;
    cont=cont+1;
    
}


alert("La suma de los numeros "+ veces + " es de " +suma );

document.getElementById("suma").innerHTML = "La suma de los " + veces + " primeros numeros es de " + suma;
