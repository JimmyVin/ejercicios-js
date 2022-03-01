
let par =0;
let suma =0;
let n = 0;;
let ap =0;



alert('hacer un algoritmo que nos calcule la suma de los n primeros números pares siguientes al número. es decir; si insertamos un 5, nos haga la suma de 6+8+10+12+14.');
n = Number(prompt("Ingrese el numero donde va a empezar y la cantidad de numero pares que se sumara"));

if (n%2==0) {
    for (x=1;x<=n;x++) {
        
        suma += par + n;
        par += 2;
    }
    
} else {
    ap = n + 1;
    for (x=1;x<=n;x++) {
        
        suma += par + ap;
        par += 2;
    }
    
    
}
alert('la suma de los ' + n + ' primeros numeros pares es: ' + suma)
document.getElementById('par').innerHTML = 'la suma de los ' + n + ' primeros numeros pares es: ' + suma;



