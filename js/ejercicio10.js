let año = 0;
let mes = 0;
let dia = 0;
let contador = 0;
alert('Identificar mediante un programa si es año bisiesto y si la fecha es correcta')
dia = Number(prompt("ingrese los dias en numeros"));
mes = Number(prompt("Ingrese los meses en numeros"));
año = Number(prompt("ingrese el año en numeros"));


if ((año%4==0) && ((año%100!=0) || (año%400==0))) {
    alert("EL año " + año + " ingresado es biciesto");
    document.getElementById('fechaBiciesta').innerHTML = "EL año " + año + " ingresado es biciesto";
    b = 1;
} else {
    alert("El año " + año + " ingresado no es biciesto");
    document.getElementById('fechaBiciesta').innerHTML = "EL año " + año + " ingresado no es biciesto";
    b = 0;
}


if (mes > 12) {
    alert('limite de meses permitidos maximo 12 meses')
    document.getElementById('fraseMes').innerHTML = 'limite de meses permitidos maximo 12 meses';
    contador = 2;
}

if (dias> 31) {
    alert('limite de dias permitidos maximo 31 dias')
    document.getElementById('fraseDias').innerHTML = 'limite de dias permitidos maximo 31 dias';
    contador = 2;
}

if ((año%4!=0 && mes == 2) && dias > 28 ) {
    alert('En me febrero y año no biciestoa permitimos maximo 28 dias')
    document.getElementById('fraseDias2').innerHTML = 'En me febrero y año no biciesto permitimos maximo 28 dias';
    contador = 2;
}

if (dias > 30 && mes%2==0) {
    alert('los meses de febrero, abril, junio, septiembre, noviembre pueden tener maximo 30 dias')
    document.getElementById('fraseDias3').innerHTML ='los meses de febrero, abril, junio, septiembre, noviembre pueden tener maximo 30 dias';
    contador = 2;
}

if (contador > 0) {
    document.getElementById('la fecha es').innerHTML = 'FECHA INCORRECTA';
} else {
    document.getElementById('la fecha es').innerHTML = 'FECHA CORRECTA';
}

document.getElementById('fecha').innerHTML = 'Fecha ingresada: ' + dia + ' / ' + mes + ' / ' + año;
