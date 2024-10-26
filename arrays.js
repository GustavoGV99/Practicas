//valor por asignacion
let a = 2;
let b = a;

a = 5;

console.log(a);
console.log(b);

//valor por referencia
//arrays
let array = [1, 2, 3]; //xcq -> 10
let array2 = array; //xcq -> 10

array2.push(10);

console.log(array);
console.log(array2);

function añadirValor(ejemploDeArray, a) {
    ejemploDeArray.push("Monitor");
    a = 20;
}

añadirValor(array, a);

//objetos

let laptops = {
    marca: "Lenovo",
    caracteristicas : "ryzen 7"
}

let computadoras = laptops;

computadoras.marca = "LG";


//mutabilidad e inmutabilidad

//evitar errores

//inmutabilidad

laptops.caracteristicas = "i5";

Object.freeze(laptops);

laptops.caracteristicas = "i7";

//inmutabilidad o copias de objetos/arrays
 
//  valormemoria   /    valores     valor
let frutasRojas =      ["manzana", "uvas"];

//operador spread
let frutasVerdes = [...frutasRojas];

frutasVerdes.push("peras");
frutasVerdes.push("kiwi");

console.log(frutasRojas);
console.log(frutasVerdes);

function añadirFrutas(ejemploDeArray) {
    ejemploDeArray.push("Sandia");
    console.log(ejemploDeArray)
}

añadirFrutas([...frutasVerdes]); //ctrl c
console.log(frutasVerdes);

let telefonos = {
    marca: "Samsung",
    caracteristicas : "Android 10"
}

let tablets = {...telefonos}; //ctrl c

tablets.caracteristicas = "Android 12";

console.log(telefonos);
console.log(tablets);

// programación funcional

let multiplicar = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < multiplicar.length; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

multiplicar.map(n => {
    (n * 2)
});

const frutas = frutasVerdes.filter(n => n.includes('a'))

console.log(frutas);
console.log(frutasVerdes);