
alert("Ejercicio 30 - Serie grafica de asteriscos");

    var c, f, num, serie; 
    num = Number(prompt("Ingrese un numero menor a 20 y mayor a 7"));
	
	document.write("<br> el numero ingresado es: ",num,'<br> la serie grafica es; <br><br>');
	if (num>=7 && num<=20) {
		for (f=1;f<=7;f++) {
			serie = "*";
			if (f>=5) {
				num = num+2;
			}
			for (c=1;c<=num-f;c++) {
				serie = serie+" "+"*";
			}
			document.write(serie,'<BR/>');
		}
	} else {
		document.write("Numero equivocado",'<BR/>');
	}
