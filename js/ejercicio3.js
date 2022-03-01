let nombre;
let cantidad = 0;
let precio = 0;
let preciosin = 0;
let preciofinal = 0;
let descuento = 0;

alert("Programa para calcular el precio de un producto y aplicar descunto");
nombre= prompt("Nombre del producto");
cantidad = Number(prompt('cantidad de '  + nombre + ' para llevar'));
precio = Number(prompt("Precio unitario del "+ nombre));

preciosin= cantidad * precio;

descuento= preciosin * 0.1;

preciofinal = preciosin - descuento;

document.getElementById("producto"   ).innerHTML = "Nombre de producto:__________________________  " + nombre;
document.getElementById("cantidad"   ).innerHTML = "cantidad de " + nombre + ' para llevar:______  ' + cantidad;
document.getElementById("precio"     ).innerHTML = "El precio unitario del producto es de:_______$ " + precio;
document.getElementById("subtotal"   ).innerHTML = "El subtotal es de :__________________________$ " + preciosin;
document.getElementById("descuento"  ).innerHTML = "El descuento de su compra es de: ____________$ " + descuento;
document.getElementById("preciofinal").innerHTML = "El precio total a pagar es de: ______________$ " + preciofinal;


alert("Su valor a pagar es de : $ " + preciofinal)

