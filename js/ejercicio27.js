let nota1 = 0;
let nota2 = 0;
let promedio = 0;
let notas = 0;

alert("Hacer un algoritmo que muestre el promedio de varias notas o 'N' notas ingreasadas,se debe definir el valor de 'N' para conocer la cantidad de notas a ingesar");
notas = Number(prompt('ingrese el numero de notas para promdiar'));

for (let i = 1; i <= notas; i++) {
    nota1 = Number(prompt("Escriba la nota " + i + " del estudiante"));
    nota2 += nota1;
    
}
promedio = nota2/notas;

alert ("El promedio del estudiante es de : " + promedio + ' nota menor a 7 reprobada')

if (promedio < 7) {

    alert("Usted ha reprobado ");
    document.getElementById("frase").innerHTML = "Usted ha reprobado : " + promedio + ' nota menor a 7 reprobada';
    
} else {

    alert("Usted ha aprovado ");
    document.getElementById("frase").innerHTML = "Usted ha aprobado "
    
}
 

document.getElementById("promedio").innerHTML = "El promedio es de las " + notas + " notas ingresdas es : " + promedio;

