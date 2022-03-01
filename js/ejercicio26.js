let opcion;
let duracion;

alert("mostrar el costo a pagar por una llamada telefónica, según la zona de destino y la duración en minutos con sus respectivas restricciones.")

alert('   PRECIOS POR SECTOR\n\n' + "(1) - P*m 0.15$ - Estados Unidos \n" + "(2) - P*m 0.14$ -Canada\n" +"(3) -P*m 0.25$ -España\n" + "(4) -P*m 0.05$ -Colombia\n"+"(5) -P*m 0.10$ -Venezuela\n" +"(6) -P*m 0.11$ -Mexico\n" + "(7) -P*m 0.12$ -Argentina\n" + "(8) -P*m 0.08$ -Panama\n")


opcion = Number(prompt("Ingrese la opcion del pais al que acabo de llamar"))
duracion = Number(prompt("Ingrese la duracion de la llamada en minutos"))

switch (opcion) {
    case 1:
        precio = duracion * 0.15;
        alert("El precio de su llamada a Estados Unidos es de : $ "+ precio);
        document.getElementById("precio").innerHTML = "Su precio por llamada fue de : $ " + precio;
        
        break;
    case 2:
        precio = duracion * 0.14;
        alert("El precio de su llamada a Canada es de : $ " + precio  );
        document.getElementById("precio").innerHTML = "Su precio por llamada fue de : $ " + precio;
    
        break;
    case 3: 
       precio = duracion * 0.25;
       alert("El precio de su llamada a España es de : $ " + precio );
       document.getElementById("precio").innerHTML = "Su precio por llamada fue de : $ " + precio;

       break;
    case 4:
        precio = duracion * 0.05;
        alert("El precio de su llamada a Colombia es de : $ " + precio );
        document.getElementById("precio").innerHTML = "Su precio por llamada fue de : $ " + precio;

        break;
    
    case 5:
        precio = duracion * 0.10;
        alert("El precio de su llamada a Venezuela es de : $ " + precio );
        document.getElementById("precio").innerHTML = "Su precio por llamada fue de : $ " + precio;

        break;
    
    case 6:
        precio = duracion * 0.11;
        alert("El precio de su llamada a Mexico es de : $ " + precio );
        document.getElementById("precio").innerHTML = "Su precio por llamada fue de : $ " + precio;

        break;
    
    case 7:
        precio = duracion * 0.12;
        alert("El precio de su llamada a Argentina es de : $ " + precio );
        document.getElementById("precio").innerHTML = "Su precio por llamada fue de : $ " + precio;

        break;
    
    case 8 :
        precio = duracion * 0.40;
        alert("El precio de su llamada a Panama es de : $ " + precio );
        document.getElementById("precio").innerHTML = "Su precio por llamada fue de : $ " + precio;

    default:
        break;
}

document.getElementById("duracion").innerHTML = "Su duracion de llamada fue : " + duracion;
document.getElementById("opcion").innerHTML = "Su opcion del pais que llamo fue : " + opcion;
