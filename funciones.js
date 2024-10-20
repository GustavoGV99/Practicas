// Funcion declarativa - Funcion de flecha - Funcion anonima.

//Funcion anonima
const funcionAnonima = function(n1, n2){
  console.log(sumar(3,4));
  return n1 + n2;
}

//Funcion declarativa
function sumar (n1, n2){ //Se asigna en una pila de memoria
  functionArrrowBody(5,6);
  return n1 + n2;
}

//Funcion de flecha seguira el flujo en cascada
//con cuerpo 
const functionArrrowBody = (n1, n2) => {
  functionArrrow();
  return n1+n2;
}

//sin cuerpo
const functionArrrow = (n1, n2) => n1 + n2;

console.log(funcionAnonima(1,2));

//METODO LIFO -> Last In First Out