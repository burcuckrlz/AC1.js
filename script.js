// ESTE ARCHIVO SE EJECUTA PORQUE ESTÁ ENLAZADO AL HTML
// CON <script src="./script.js"></script>

// HOLA MUNDO
// console.log("HOLA MUNDO EN JAVASCRIPT por consola");
// saludar()
function saludar() {
    const mensaje = "¡HOLA!";
    console.log(mensaje);
    document.getElementById("mensaje").value = mensaje +"❤️";
}

// saludarPersona(persona)
function saludarPersona(persona) {
    const mensaje = "¡HOLA, " + persona + "!";
    console.log(mensaje);
    document.getElementById("mensaje").value = mensaje +"❤️";
}

// saludarPersona2(persona)
function saludarPersona2(persona) {
    const mensaje = "¡HOLA, " + persona + "!";
    console.log(mensaje);
    document.getElementById("mensaje").value = mensaje +"❤️";
}


function esParell() {
    let numero = prompt("Introduce un número para verificar si es par o impar:");
    numero = Number(numero); 

    let result = (numero % 2 === 0) ? "El número es par." : "El número es impar.";
    console.log(result);
    document.getElementById("mensaje").value = result;
}

function nota() {
    let nota = prompt("Introduce la nota (0-10):");
    nota = Number(nota);

    let result = "";
    if (nota < 5) {
        result = "Insuficiente"+"😞";
    } else if (nota < 7) {
        result = "Bien"+"👍";
    } else if (nota < 9) {
        result = "Notable"+ "🏅";
    } else {
        result = "Excelente"+ "🏆✨";
    }

    console.log(result);
    document.getElementById("mensaje").value = result;
}

function compteEnrera(numero) {
    for (let i = numero; i >= 0; i--) {
        console.log(i);
        document.getElementById("mensaje").value = result;
    }
}


function compteEnrera() {
    let numero = prompt("Introduce un número para la cuenta atrás:");
    let result = "";
    for (let i = numero; i >= 0; i--) {
        result += i + " ";
    }
    document.getElementById("mensaje").value = result;
}


function deletrejar() {
    let palabra = prompt("Introduce una palabra para deletrear:");

    let result = "";
    for (let i = 0; i < palabra.length; i++) {
        result += palabra[i] + " ";
    }

    console.log(result); 
    document.getElementById("mensaje").value = result;
}


function sumar() {
    let numero1 = prompt("Introduce un número:");
    let numero2 = prompt("Introduce otro número:");
    let resultado = Number(numero1) + Number(numero2);
    console.log("El resultado de la suma es:", resultado);
    document.getElementById("mensaje").value = resultado;
}


function sumar2(numero1, numero2) {
    let resultado = Number(numero1) + Number(numero2);
    console.log("El resultado de la suma es:", resultado);
    document.getElementById("mensaje").value = resultado;
}


function sumar3(numero1, numero2) {
    let resultado = Number(numero1) + Number(numero2);
    document.getElementById("mensaje").value = resultado;
    return resultado;
}

// DECLARACIÓN DE VARIABLES (LET)
// C# int numero = 4
//let numero = 4;
// c# Console.writeline(numero);
// console.log(numero);

// TIPADO DINÁMICO
// // document.write(numero);
// console.log(typeof(numero));
// numero = "patata";
// console.log(typeof(numero));
// numero = [1,2,3,4];
// console.log(typeof(numero));

// ERROR POR USAR VARIABLE ANTES DE DECLARARLA
// console.log(variable2);
// let variable2 = 0;
// FUNCIONES BÁSICAS

// SINTAXIS DE CONDICIONALES
//let condicion = true;

// if (condicion == true) {
//     console.log("Condición satisfecha");
// }
// else {
//     console.log("Condición no satisfecha");
// }

// SINTAXIS DE BUCLES DE ITERACIÓN
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// ITERACIÓN DE LISTAS (3 MANERAS)
// lista2 = ["Rohit", "Albert", "Sana", "Hamsa", "Burcu"];

// for(let i=0; i < 4; i++){
//     console.log(lista2[i]);
// }

// for (let alumno of lista2){
//     console.log(alumno);
// }

// lista2.forEach((elemento)=>{console.log(elemento)});

// for (let i = 0; i < lista2.length; i++) {
//     console.log(lista2[i]);
// }

// ITERACIÓN DE LISTAS BIDIMENSIONALES
let tablero = [[[1], [2], [3]],
[[4], [5], [6]],
[[7], [8], [9]]];

// for(let i=0; i < tablero.length; i++){
//     //recorro cada fila
//     console.log(tablero[i]);
//     for(let j=0; j < tablero[i].length; j++){
//         console.log(tablero[i][j]);
//     }
// }

// FUNCIONES

// DECLARACIÓN DE LA FUNCIÓN (1 SOLA VEZ)
// function suma() {
//     // let numero1 = prompt("Introduce un número");
//     // let numero2 = prompt("Introduce otro número");
//     let numero1 = 4;
//     let numero2 = 8;
//     let resultado = Number(numero1) + Number(numero2);
//     console.log(resultado);
//}
// EJECUCIÓN DE LA FUNCIÓN (MÚLTIPLES VECES)
// suma();
// suma();
// suma();
// (...)

// suma2();

// FUNCIONES CON ENTRADAS (UNA O VARIAS)
// function suma2(num1,num2) {
//     let resultado = Number(num1) + Number(num2);
//     console.log(resultado);
// }

// suma3(1,5);

// let primerNumero = 1;
// let segundoNumero =5;
// suma3(primerNumero,segundoNumero);

// let numero1 = prompt("Introduce un número");
// let numero2 = prompt("Introduce otro número");
// suma3(numero1,numero2);

// FUNCIONES CON SALIDA (SÓLO UNA)
// function suma3(num1,num2) {
//     let resultado = Number(num1) + Number(num2);
//     return resultado;
// }

// let resultado = suma4(99,1);
// console.log(resultado);

// let numero1 = prompt("Introduce un número");
// let numero2 = prompt("Introduce otro número");
// let resultado = suma4(numero1,numero2);
// console.log(resultado);