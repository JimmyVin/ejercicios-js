let cifra, d1, d2, d3, d4, d5, num, r1, r2, r3, num2;
alert('Comprobar que un numero de 4 y de 5 dígitos es palíndromo');
cifra = Number(prompt("Ingrese el numero"));
document.getElementById("cifra").innerHTML = "El numero ingresado contiene " + cifra ;

switch (cifra) {
    case 4:
        num = Number(prompt("Ingrese el numero de 4 cifras"));
        document.getElementById("num").innerHTML = "El numero insertado de 4 cifras es " + num + " cifras";

        d1 = (num-(num%1000))/1000;
		r1 = num%1000;
		d2 = (r1-(r1%100))/100;
		r2 = num%100;
		d3 = (r2-(r2%10))/10;
		d4 = num%10;
        num2=((d4*1000)+(d3*100)+(d2*10)+d1);
        document.getElementById("num2").innerHTML = "El numero invertido es : " + num2;
		if (num== num2) {
			alert("El numero " + num + " ingresado es palindromo");
            document.getElementById("frase").innerHTML = "El numero " + num + " es palindormo"
		} else {
			alert("El numero " + num + " ingresado no es palindromo");
            document.getElementById("frase").innerHTML = "El numero " + num + " no es palindormo"
		}

        break;


    case 5:
        num= Number(prompt("Ingrese el  numero de 5 cifras"));
        document.getElementById("num").innerHTML = "El numero insertado de 5 cifras es : " + num;
        d1 = (num-(num%10000))/10000;
		r1 = num%10000;
		d2 = (r1-(r1%1000))/1000;
		r2 = num%1000;
		d3 = (r2-(r2%100))/100;
		r3 = r2%100;
		d4 = (r3-(r3%10))/10;
		d5 = r3%10;
        num2 = ((d5*10000)+(d4*1000)+(d3*100)+(d2*10)+d1);
        document.getElementById("num2").innerHTML = "El numero invertido es : " + num2;
		if (num== num2) {
			alert("El numero " + num + " ingresado es palindromo");
            document.getElementById("frase").innerHTML = "El numero " + num + " es palindormo"
		} else {
			alert("El numero " + num + " ingresado es palindromo");
            document.getElementById("frase").innerHTML = "El numero " + num + " no es palindormo"
		}
        
        break;

    default:
        break;
}

