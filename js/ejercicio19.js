let a =  new Array(n);
let i =0;
let j =0;
let k =0;
let  p =0;
let caja =0; 
let n =0;

alert('Hacer un programa que ordene los números ingresados de mayor a menor y de menor a mayor.')
n = Number(prompt("cantidad de numeros a ingresar?"));

for (p=1;p<=n;p++) {
    a[p] =Number(prompt('ingrese numero ' + p));
}
for (k=1;k<=n;k++) {
    for (j=1;j<=(n-1);j++) {
        if (a[j-1]<a[j]) {
            caja = a[j-1];
            a[j-1] = a[j];
            a[j] = caja;
        }
    }
}
alert("El arreglo de numeros de mayor a menor");
document.getElementById('mayor-menor').innerHTML = "El arreglo de numeros de mayor a menor";
for (i=1;i<=n;i++) {
    document.createElement('<p id=\"' + i +'\"></p><br>' );
    document.getElementById('\"'+ i + '\"').innerHTML = a[i];
}
/*for (k=1;k<=n;k++) {
    for (j=1;j<=(n-1);j++) {
        if (a[j-1]>a[j]) {
            caja = a[j-1];
            a[j-1] = a[j];
            a[j] = caja;
        }
    }
}
document.write("El arreglo de numeros de menor a mayor",'<BR/>');
document.write("-------------------------------",'<BR/>');
for (i=1;i<=n;i++) {
    document.write(a[i-1],'<BR/>');
}*/



