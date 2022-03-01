let a =0;
let b =0;
let c =0;
alert('elaborar un programa que ingrese 3 números y muestre el número intermedio.');
a= Number(prompt("Ingrese el primer numero"));
b= Number(prompt("Ingrese el segundo numero"));
c= Number(prompt("Ingrese el tercer numero"));

document.getElementById("num1").innerHTML = "El primer numero ingresado es: " + a;
document.getElementById("num2").innerHTML = "El segundo numero ingresado es: " + b;
document.getElementById("num3").innerHTML = "El tercer numero ingresado es: " + c;


if (a!=b && a!=c && b!=c) {
    if ((a<b && a>c) || (a>b && a<c)) {

        alert("El numero intermedio es " + a);

        document.getElementById("medio").innerHTML = "El numero intermedio es:  " + a ;
    } else {
        if ((b<a && b>c) || (b>a && b<c)) {

            alert("El numero intermedio es " + b);

            document.getElementById("medio").innerHTML = "El numero intermedio es:  " + b ;
            
        } else {
            if ((c<a && c>b) || (c>a && c<b)) {

                alert("El numero intermedio es " + c);

                document.getElementById("medio").innerHTML = "El numero intermedio es:  " + c ;
                
            }
        }
    }
    
} else {
    
    alert("Ingrese tres numero diferentes")
}