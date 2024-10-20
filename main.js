//SCOPE -> al contexto dentro de tu programa

let a = 10;
let b = "10";
let c;
let d;

const constante = 1;
var variable = 2;
let lett = 3;

function variables(){
  let lett = 6;
  const constante = 2;

  console.log(lett);
  console.log(constante);
  
}

variable();
console.log(lett);
console.log(constante);

if (true) {
  const local = "";
  let local2;
  var variable = "soy var";

 
  
}
/**
 * Método que se utiliza para sumar por parametros.
 * @param {*} primerNumero es el primer valor de la sumar
 * @param {*} b es el segundo valor para sumar
 * @returns la suma de primerNumero + b
 */
function suma(primerNumero, b){
  const num1 = a;
  const num2 = b;

  return num1 + num2;
}

/**
 * Funcion que compara a y b
 * si a es = a b entonces es true
 * si no es false
 */
function comparar(){
  c = a == b ? true : false;
  // c = a == b ? "10" : a > 10 ? "no" : "si";
  console.log(c);
}
suma();
comparar();

console.log(d ?? "d es vacio");
//Combercion de tipos.
console.log(8 + "1");
console.log(8 - "1");
console.log(8 * "Algo");
console.log(true == 0);
console.log(true == "Gus");




