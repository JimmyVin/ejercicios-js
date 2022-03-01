alert('Hacer un algoritmo que muestre el promedio de varias notas o de N notas ingresadas, se debe definir el valor de N para conocer la cantidad de notas a ingresar');
let sumaNotas = 0;

let notas = Number(prompt('ingrese numero de notas'));

for(i = 1; i <= notas; i++){
    let nota = Number(prompt('ingrese nota ' + i));
    sumaNotas += nota;
}

document.getElementById('promedio').innerHTML = 'el promedio de las ' + notas + ' notas es de: ' + sumaNotas/notas;