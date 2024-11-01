const carrito = [
    { nombre: "Laptop", precio: 1500, enOferta: false },
    { nombre: "Auriculares", precio: 100, enOferta: true },
    { nombre: "Mouse", precio: 50, enOferta: true },
    { nombre: "Monitor", precio: 300, enOferta: false },
    { nombre: "Teclado", precio: 80, enOferta: true }
];
  
// Usar filter para mostrar solo los productos en oferta
 
let pro = carrito.filter(n=> n.enOferta === true);
console.log(pro);

// Usar Map para obtener los precios de los productos

let pre = carrito.map(n=> n.precio);
console.log(pre);

 
// usar Reduce para obtener el total de los precios

let red = carrito.reduce( (acumulador, item) => {
    return acumulador += item.precio; // <- me puse a buscar videos y al final xD si lo tenia pero me faltaba colocar item y yo puse 2 veces acumulador y aparte el iniciador que es el ,0 XD
}, 0);

console.log(red);

console.log("####################################################################");


// de los metodos usados anteriormente, ahora debes usar programación funcional para filtrar los precios en oferta, extraer el precio y sumar el total


let oferta = carrito.filter( n => n.enOferta ).reduce((acc,item) => {
    return acc+= item.precio;
}, 0);
console.log("Listo: ",oferta);

let ofertaconmap = carrito.filter( n => n.enOferta ).map(n=> n.precio).reduce((acc, item) => {
    return acc += item;
}, 0);
console.log("Listo: ",ofertaconmap);
 

//ejemplo const precios = carrito.map(producto => producto.precioEspecial);

// buscar como hacer metodos en cadena para hacerlo en un solo metodo, ejemplo

// const estudiantesAprobados = estudiantes.filter(estudiante => estudiante.promedio >= 70)
// .sort((a, b) => b.promedio - a.promedio)
// .map(estudiante => estudiante.nombre);
