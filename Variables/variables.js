//Variables

//Globales
var Ubicacion = "Mundo";
if(Ubicacion){
    var Ubicacion="Mexico";
    console.log(Ubicacion);
}

//Limitadas
let segundo_nombre = "Miguel";
if(segundo_nombre){
    let segundo_nombre="Hector";
    console.log(segundo_nombre);
}
console.log(segundo_nombre);

//Inmutables
const apellido ="Cuaxiloa"
console.log(apellido);
//const apellido ="Cuaxiloa" ERROR
//console.log(apellido);    ERROR


//Tipos de Variables

//string
let juego="Horizon: Zero Dawn";
console.log(juego);

//Number
let trofeos= 24;
let tiempo = 60.50;
console.log(trofeos);
console.log(tiempo);

//Boolean
let verdadero =true;
let falso =false;
console.log(verdadero);
console.log(falso);

//Undefined
let indefinido = undefined;
console.log(indefinido);

//Null
let nulo=null;
console.log(nulo);

//interpolacion
console.log(`Hola mundo, Terminé el juego de ${juego} con ${trofeos} trofeos y en ${tiempo} horas`);

//Variables de Numero
let a=4;
let b=5;
let c=6;

//Operacion Aritmetica
console.log(a+b-c);


//2 Asignaciones y 1 aritmetica
console.log(a=c);
console.log(a-=b);
a++;
console.log(a)

//1 Comparacion
console.log(a!=b);
console.log(a===trofeos); //iguales y del mismo tipo

//Operador logico && || !
//let enviar= true;
//let cancelar = false;

//console.log(cancelar);

//console.log(cancelar && enviar);
//console.log(cancelar || enviar);
//console.log(!cancelar);

//EXTRA operador condicional ternario condicion ? true:False
let horas = 10;
let triunfo = horas <= 17 ? "Logro desbloqueado" : "Intentalo de Nuevo";
console.log(triunfo);
