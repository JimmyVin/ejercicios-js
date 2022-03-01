alert('realizar un programa que muestre la serie de fibonacci con números menores al x200 es decir x sea menor que 200');

function fibonacci(limit){
    let fibserie =  [0,1];
    for (let i = 2; i < limit; i++) {
        fibserie[i] = fibserie[i-1] + fibserie[i-2];

        
    }
    return fibserie
}

let serie = fibonacci(13);
let ul = document.getElementById('serie');

serie.forEach(numero => {
    let li = document.createElement('li');
    li.innerHTML = numero;
    ul.append(li);
});