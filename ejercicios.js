/* POTENCIA DE 2
Crear una función que te devuelva 2 elevado al
número que se le pasa como argumento

potenciaDos(3) -> 8
potenciaDos(5) -> 32
potenciaDos(10) -> 1024
*/

/*
let potenciaDos = exp => 2**exp;
console.log(potenciaDos(-4));

let potenciar = (base, exp) => base**exp;
console.log(potenciar(7, 3));
*/

/*
INVERTIR UN ARREGLO
Crear una función que reciba un arreglo y devuelva un arreglo invertido

invertirArreglo([0, 1, 2, 3, 4]) -> [4, 3, 2, 1, 0]
*/

/*
function invertirArreglo(arr) {
    let auxArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        auxArr.push(arr[i]);
    }
    return auxArr;
}
*/

/*
// CON PRINT STATEMENTS
function invertirArreglo(arr) {
    let auxArr = [];

    console.log(`Arreglo -> ${arr}`);
    console.log(`Arreglo auxiliar -> ${auxArr}`);
    console.log("Empieza el bucle...")

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log("=========================>");
        auxArr.push(arr[i]);
        console.log(`Iterador -> ${i}`);
        console.log(`Elemento Arreglo[${i}] -> ${arr[i]}`);
        console.log(`Arreglo auxiliar -> ${auxArr}`);
    }

    return auxArr;
}
*/

//console.log(invertirArreglo(["h", "o", "l", "a"]));

/*
// INTERCAMBIAMOS DOS VALORES
let n1 = 1;
let n2 = 2;

console.log(n1);
console.log(n2);

console.log("INTERCAMBIAMOS");

let aux = n1;
n1 = n2;
n2 = aux;

// INTERCAMBIAMOS
console.log(n1);
console.log(n2);
*/

/*
CONTAR VOCALES
Crear una función que reciba una cadena y muestre
la cantidad de vocales que tiene

contarVocales("hola") -> 2
contarVocales("queso") -> 3
*/
/*
function contarVocales(str) {
    let contador = 0;

    for (let c of str) {
        switch (c.toLowerCase()) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
                contador++;
                break;
        }
    }

    return contador;
}

console.log(contarVocales("hola"));
*/

/*
MAYOR DE TRES NÚMEROS
Crear una función que reciba un arreglo de números
y devuelva el mayor
*/

function numMax(nums) {
    let mayor = -999999999;

    for (const num of nums) {
        if (num > mayor) {
            mayor = num;
        }
    }

    return mayor;
}

console.log(numMax([34, 67, -45, 87, 56, -23, 2]));

function numMin(nums) {
    let menor = 999999999;

    for (const num of nums) {
        if (num < menor) {
            menor = num;
        }
    }

    return menor;
}

console.log(numMin([-123, 34, 67, -45, 87, 56, -23, 2]));