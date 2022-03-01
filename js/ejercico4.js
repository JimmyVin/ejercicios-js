
alert('ejercicio 3; Calcular el área de un rectángulo, en un programa.');
var numero1 = prompt('ingrese el valor de la altura de un rectangulo: ');
var numero2 = prompt('ingrese el valor de la base de un rectangulo:  ');
var area = numero1 * numero2;
var perimetro = (2 * numero2) + (2 * numero1);


document.getElementById('area').innerHTML = 'el area del rectanguo es: ' + area;
document.getElementById('perimetro').innerHTML = 'el perimetro de un rectangulo es: ' + perimetro;
alert('el area del rectanguo es: ' + area + 'el perimetro de un rectangulo es: ' + perimetro)
