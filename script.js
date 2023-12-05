// CREAMOS NUESTRA PRIMERA FUNCIÓN
/*
function escribir() {
    console.log("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis, possimus exercitationem, dolorum magnam voluptatum veniam alias quasi aliquid ad pariatur tenetur, unde sequi fugiat neque hic reprehenderit repudiandae quas?");
    console.log("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis, possimus exercitationem, dolorum magnam voluptatum veniam alias quasi aliquid ad pariatur tenetur, unde sequi fugiat neque hic reprehenderit repudiandae quas?");
    console.log("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis, possimus exercitationem, dolorum magnam voluptatum veniam alias quasi aliquid ad pariatur tenetur, unde sequi fugiat neque hic reprehenderit repudiandae quas?");
    console.log("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis, possimus exercitationem, dolorum magnam voluptatum veniam alias quasi aliquid ad pariatur tenetur, unde sequi fugiat neque hic reprehenderit repudiandae quas?");
    console.log("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis, possimus exercitationem, dolorum magnam voluptatum veniam alias quasi aliquid ad pariatur tenetur, unde sequi fugiat neque hic reprehenderit repudiandae quas?");
    console.log("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis, possimus exercitationem, dolorum magnam voluptatum veniam alias quasi aliquid ad pariatur tenetur, unde sequi fugiat neque hic reprehenderit repudiandae quas?");
    console.log("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis, possimus exercitationem, dolorum magnam voluptatum veniam alias quasi aliquid ad pariatur tenetur, unde sequi fugiat neque hic reprehenderit repudiandae quas?");
    console.log("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis, possimus exercitationem, dolorum magnam voluptatum veniam alias quasi aliquid ad pariatur tenetur, unde sequi fugiat neque hic reprehenderit repudiandae quas?");
    console.log("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis, possimus exercitationem, dolorum magnam voluptatum veniam alias quasi aliquid ad pariatur tenetur, unde sequi fugiat neque hic reprehenderit repudiandae quas?");
    console.log("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis, possimus exercitationem, dolorum magnam voluptatum veniam alias quasi aliquid ad pariatur tenetur, unde sequi fugiat neque hic reprehenderit repudiandae quas?");
}

// LLAMAMOS A LA FUNCION
escribir();
*/
/*
// SALUDO CON PARAMETROS
function saludar(nombre) {
    console.log(`Hola ${nombre}, buenas noches.`)
}

// CON ARROW FUNCTION
let saludar = nombre => console.log(`Hola ${nombre}, buenas noches.`);

saludar("Juan");

// LLAMAMOS A LA FUNCIÓN SALUDO
let nombre = prompt("Ingresa tu nombre: ");

saludar(nombre);
*/

// OPERACIONES
/*
function sumar(n1, n2) {
    console.log(n1 + n2);
}

sumar(56, 89);
*/
/*
function sumar(n1, n2) {
    return n1 + n2;
}

// ARROW FUNCTION
let sumar = (n1, n2) => n1 + n2;

let resultado = sumar(56, 89);

console.log(resultado);
*/

/*
let saludar = nombre => console.log(`Hola ${nombre}, buenas noches.`);

saludar("Juan");
*/

/*
// ARROW FUNCTION -> SUMAR
let sumar = (n1, n2) => n1 + n2;

let resultado = sumar(23, 2345);

console.log(resultado);
*/

// SUMA
/*
function sumar(n1, n2) {
    return n1 + n2;
}
*/

// ARROW FUNCTION
let sumar = (n1, n2) => n1 + n2;

// RESTA
/*
function restar(n1, n2) {
    return n1 - n2;
}
*/

// ARROW FUNCTION
let restar = (n1, n2) => n1 - n2;

// MULTIPLICACIÓN
/*
function multiplicar(n1, n2) {
    return n1 * n2;
}
*/

// ARROW FUNCTION
let multiplicar = (n1, n2) => n1 * n2;

// DIVISIÓN
function dividir(n1, n2) {
    if (n2 != 0) {
        return n1 / n2;
    }
    else {
        return "ERROR: DIVIDENDO CERO";
    }
}

// ARROW FUNCTION CON OPERADOR TERNARIO
// let dividir = (n1, n2) => n2 != 0 ? n1 / n2 : "ERROR: DIVIDENDO CERO";

console.log(dividir(10, 3));