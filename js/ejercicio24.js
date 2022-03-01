
let dos = 0;
let tres =0;

alert('digitalizar un algoritmo que vizualice la cuenta de los números que son múltiplos de 2 o 3 que hay entre 1 y 100. ');
document.getElementById('multiDos').innerHTML = 'lista de numeros multiples de 2';
for ( i = 1; i <= 50; i++) {
    dos += 2;
    let li = document.createElement('li');
    li.textContent = dos;
    listaDos.appendChild(li);
}
document.getElementById('multiTres').innerHTML = 'lista de numeros multiples de 3';
for ( i = 1; i <= 33; i++) {
    tres += 3;
    let li = document.createElement('li');
    li.textContent = tres;
    listaTres.appendChild(li);
}
    

