alert('ejercicio 15; Elaborar un programa que permita ingresar 10 número enteros y muestre la cantidad de números pares e impares ingresados');
let pares = 0;
let impares = 0;
for(i=1; i<=10; i++ ){
    let numero = Number(prompt('ingere numero ' + i));
    if(numero % 2 == 0){
        pares +=1;
    }else{
        impares += 1;
    }
}

document.getElementById('numPares').innerHTML = 'la cantidad de numeros pares ingresados es de: ' + pares ;
document.getElementById('numImpares').innerHTML = 'la cantidad de nuero impares ingresados es de: ' +impares;