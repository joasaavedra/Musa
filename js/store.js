function Producto(nombre, cantidad, precio) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
}

const listaProductos = [];
let pregunta = prompt("Desea agregar algo al carrito? (s/n)");

if(pregunta === "s") {
    let nombre = prompt("Que producto desea agregar?");
    let cantidad = parseInt(prompt(`Cuantos ${nombre} desea agregar?`));
    let precio = parseInt(prompt("Ingrese el precio del producto"));
    let productoIngresado = new Producto(nombre, cantidad, precio);
    listaProductos.push(productoIngresado);
    console.log(listaProductos);
    pregunta = prompt("Desea agregar otro producto? (s/n)");
} else {
    console.log("El cliente no desea comprar nada");
}

let precioTotal = 0;

for(let i=0; i<listaProductos.length; i++){
    console.log(listaProductos[i]);
    precioTotal += listaProductos[i].precio * listaProductos[i].cantidad;
}

alert(`Gracias por su compra! El precio total es de $${precioTotal}.`)

