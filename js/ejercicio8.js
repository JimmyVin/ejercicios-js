let nota= 0;
let nombre;

alert("Programa para separar a los alumnos dependiendo la nota obtenida");

nombre =  prompt("Ingrese el nombre del alumno");
nota = Number(prompt("Ingrese la nota del alumno"));

document.getElementById("nota").innerHTML= "La nota del estudiante " + nombre +  " es : " + nota;
document.getElementById("nombre").innerHTML= "El nombre del alumno es : " + nombre;

if (nota>= 0 & nota <= 2) {

    alert("El estudiante " + nombre + " Necesita refuerzo");
    document.getElementById("frase").innerHTML = "El estudiante " + nombre + " : " + " Necesita refuerzo";
    
} else {
    if (nota >= 3 & nota <= 4) {

        alert ("El estudiante " + nombre + " Desaprovado");
        document.getElementById("frase").innerHTML = "El estudiante " + nombre + " : " + " Esta desaprovado ";
        
    } else {
        if (nota >= 5 & nota <= 7) {

            alert("El estudiante " + nombre + " Esta Aprovado");
            document.getElementById("frase").innerHTML = "El estudiante " + nombre + " : " + " Esta aprovado";
            
        } else {
            if (nota >= 8 & nota <=9) {

                alert("El estudiante " + nombre +" Es Exelente");
                document.getElementById("frase").innerHTML = "El estudiante " + nombre + " : " + " Es Execelente "
            } else {
                if (nota == 10) {
                    alert("El estudiante " + nombre + " Esta becado");
                    document.getElementById("frase").innerHTML = "El estudiante " + nombre + " : " +" Esta becado ";
                    
                } else {

                    alert("Ingrese una nota valida")
                    
                }
                
                
            }
           
            
        }
        
    }
    
}