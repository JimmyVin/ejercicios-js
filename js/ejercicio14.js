let sueldo = 0;
let opcion = 0;
let bonificacion = 0;
let sueldofinal =0;
alert("Se pide ingresar el sueldo de un trabajador y su categoría, dependiendo de la categoría se le dará una bonificación en el neto a pagar. Bonificación por categoría: A = 10%; B = 20%; C = 30%; D = 50%")

sueldo = Number(prompt("Ingrese su sueldo"));
opcion = Number(prompt("Ingrese la categorita que pertecene A=1, B=2, C=3, D=4"));

switch (opcion) {
    case 1:
        bonificacion = sueldo * 0.1 ;
        sueldofinal = sueldo + bonificacion ;
        alert ("la bonificacion que a cabo de recir por su categoria es de : " + bonificacion);
        alert("Su sueldo final es de : " + sueldofinal);
        document.getElementById("bonificacion").innerHTML = "Su bonificacion por la categoria A fue de : " + bonificacion + " $";
        document.getElementById("sueldofinal").innerHTML = "Su salario final es de : " + sueldofinal + " $";
        
        break;
    case 2:
        bonificacion = sueldo * 0.2 ;
        sueldofinal = sueldo + bonificacion ;
        alert ("la bonificacion que a cabo de recir por su categoria es de : " + bonificacion);
        alert("Su sueldo final es de : " + sueldofinal);
        document.getElementById("bonificacion").innerHTML = "Su bonificacion por la categoria B fue de : " + bonificacion + " $";
        document.getElementById("sueldofinal").innerHTML = "Su salario final es de : " + sueldofinal + " $";

        break;
    
    case 3:
        bonificacion = sueldo * 0.3 ;
        sueldofinal = sueldo + bonificacion ;
        alert ("la bonificacion que a cabo de recir por su categoria es de : " + bonificacion);
        alert("Su sueldo final es de : " + sueldofinal);
        document.getElementById("bonificacion").innerHTML = "Su bonificacion por la categoria C fue de : " + bonificacion + " $";
        document.getElementById("sueldofinal").innerHTML = "Su salario final es de : " + sueldofinal + " $";

        break;

    case 4:
        bonificacion = sueldo * 0.5 ;
        sueldofinal = sueldo + bonificacion ;
        alert ("la bonificacion que a cabo de recir por su categoria es de : " + bonificacion);
        alert("Su sueldo final es de : " + sueldofinal);
        document.getElementById("bonificacion").innerHTML = "Su bonificacion por la categoria D fue de : " + bonificacion + " $";
        document.getElementById("sueldofinal").innerHTML = "Su salario final es de : " + sueldofinal + " $";
        
        break;

    default:
        break;
}