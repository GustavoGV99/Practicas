let frutas = ['Manzana', 'Banana', 'Naranja', 'Pera'];
let verduras = ['Col', 'Coliflor','Perejil', 'Lechuga', 'Cilantro'];
let precios = [10, 40, 7, 18, 81, 120];
let nuevoArray = [];

//crear una función donde añadas frutas y verduras en el array original
function nuevo(nuevoArray){
    nuevoArray.push(frutas);
    nuevoArray.push(verduras);
    // console.log(nuevoArray);
}
nuevo(nuevoArray);
console.log("Frutas añadidas en el nuevo array: " + nuevoArray);

//crear una función donde añadas frutas y verduras en una copia de array

//crear un nuevo array donde añadas frutas y verduras (usar operador ... en ambos arrays)

let copiaArray = [];
function copiaFrutas(){
    copiaArray = [...nuevoArray]
}
copiaFrutas();
console.log(nuevoArray);


// crear una función que multiplique los precios donde pases por parametro el número que se va a multiplicar

let numero;
function multi(numero){
    for (let i = 0; i < precios.length; i++) {
        const element = precios[i] * numero;
        console.log(element);
    }
}
multi(2);

//crear una función que filtre los precios impares

function filtrarImpares(){
    let impar = precios.filter(n => n % 2 == 1)
    console.log(impar);
}

filtrarImpares();
