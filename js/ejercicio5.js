let nota1 = 0;
let nota2 = 0;
let nota3 = 0;
let promedio = 0;

alert("Programa para obtener la nota de un estudiante");

nota1 = Number(prompt("Escriba la primer nota del estudiante"));
nota2 = Number(prompt("Escriba la segunda nota del estudiante"));
nota3 = Number(prompt("Escriba la tercera nota del estudiante"));

promedio = (nota1 + nota2 + nota3)/3

alert ("El promedio del estudiante es de : " + promedio + ' nota menor a 7 reprobada')

if (promedio <= 6.95) {

    alert("Usted ha reprobado ");
    document.getElementById("frase").innerHTML = "Usted ha reprobado : " + promedio + ' nota menor a 7 reprobada';
    
} else {

    alert("Usted ha aprovado ");
    document.getElementById("frase").innerHTML = "Usted ha aprobado "
    
}
 
document.getElementById("nota1").innerHTML = "La primera nota es de: " + nota1;
document.getElementById("nota2").innerHTML = "La segunda nota es de: " + nota2;
document.getElementById("nota3").innerHTML = "La tercera nota es de: " + nota3;
document.getElementById("promedio").innerHTML = "El promedio es de: " + promedio;

