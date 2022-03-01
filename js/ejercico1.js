alert('Ingrese dos números y realice una suma con los mismos');
let numUno = Number(prompt('ingere numero uno: '));
let numDos = Number(prompt('ingere numero dos: '));

document.getElementById('suma').innerHTML = 'la suma de los 2 numero es: ' + (numDos + numUno);