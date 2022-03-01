let alumnosap =0;
let alumnosre =0;
let promedioap =0;
let promediore =0;
let total =0;

alert("- Ingrese la cantidad de alumnos aprobados y desaprobados de un curso, luego mostrar el porcentaje de estudiantes aprobados y el porcentaje de estudiantes desaprobados.");

alumnosap= Number(prompt("Ingrese la cantidad de alumnos aprovados"));
alumnosre= Number(prompt("Ingrese la cantidad de alumnos reprovados"));

total = alumnosap + alumnosre;

promedioap = (alumnosap * 100)/total;
promediore = (alumnosre * 100)/total;


alert("El promedio de los Alumnos aprovados es de " + promedioap + "%"  );
alert("El promedio de los Alumnos reprovados es de " + promediore + "%"  );

document.getElementById("alumnosap").innerHTML = "La cantidad de alumnos aprovados es de : " + alumnosap;
document.getElementById("alumnosre").innerHTML = "La cantidad de alumnos reprovados es de : " + alumnosre;
document.getElementById("total").innerHTML = "La cantidad total de alumnos es de : " + total;
document.getElementById("promedioap").innerHTML = "El promedio de alumnos aprovados es de : " + promedioap + "%";
document.getElementById("promediore").innerHTML = "El promedio de alumnos reprovados es de : " + promediore + "%";

