let a= 3;
let b= 5;
let c= 7;

//Funcion normal
function sumatoria(a, b, c){
    let resultado = a+b+c;
    console.log(resultado);
}

function comparativa(a, b){    
    if (a>b) {
        let mayor=a;
        let menor=b;
        console.log(`El numero mayor es ${mayor} y el menor es ${menor}`);
    } else if (a<b) {
        let mayor=b;
        let menor=a;
        console.log(`El numero mayor es ${mayor} y el menor es ${menor}`);
    } else {
        console.log(`Los numeros son iguales`);
    }  
}

sumatoria(a,b,c);
comparativa(a,b);

//Funcion flecha

const sumatoriaflecha = (a,b,c) => console.log(`La suma es ${a + b + c}`);
sumatoriaflecha (a,b,c);

let comparativaflecha= (a,b) =>{
    if (a>b) {
        let mayorf=a;
        let menorf=b;
        console.log(`El numero mayor es ${mayorf} y el menor es ${menorf}`);
        //return true;
    } else if (a<b) {
        let mayorf=b;
        let menorf=a;
        console.log(`El numero mayor es ${mayorf} y el menor es ${menorf}`);
        //return true;
    } else {
        console.log(`Los numeros son iguales`);
        //return false;
    }  
}
comparativaflecha(a,b);// == true ? console.log(`Diferentes`) : console.log(`Iguales`);

// Objetos y Destructuracion

let materiales={
    caja: `carton`,
    bases: `plastico`
}

const juegoMesa1 = {
    nombre: `Root`,
    desarrollador: `LeaderGames`,
    pais: `USA`,
    numeroJugadores: 4,
    componentes:{
        tablero: 1,
        personajes: 4,
        fichas: 80
    },
    material: materiales
}

console.log(juegoMesa1.componentes.tablero);

const{desarrollador, nombre, numeroJugadores} = juegoMesa1;
console.log(desarrollador, nombre, numeroJugadores);

const retornoJuego = ({pais, material}) => {console.log(pais, material)};
retornoJuego(juegoMesa1);

//array

let valor1=5
let valor2=4
let acceso = true
let unaFuncion = (a,b) => a+b

const arreglo=[`Mario Kart 8`, 5, 2014, [`Deluxe`, 2017]];

//const [juego, mesLanzamiento] = arreglo;
//console.log(juego, mesLanzamiento);

const funcionArreglo = () =>{return arreglo;}

const [juego, mesLanzamiento, añoLanzamiento] = funcionArreglo();

console.log(juego, mesLanzamiento, añoLanzamiento);
