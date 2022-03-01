let a, b, c, i, n;
a = 0;
b = 1;
n = Number(prompt("Ingrese las veces que quiere que se aplique la serie de Fibonacci"));

if (n <= 200) {
    for (i=1;i<=n;i++) {
        
        document.write(a,'<BR/>');
        c = a+b;
        a = b;
        b = c;
    }
    
}
alert("La serie de Fibonacci es:")
