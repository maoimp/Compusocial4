// Pedir al usuario el primer número
let num1 = parseFloat(prompt("Introduce el primer número:"));
// Pedir al usuario el segundo número
let num2 = parseFloat(prompt("Introduce el segundo número:"));
// Pedir al usuario la operación
let operacion = prompt("Introduce la operación (+, -, *, /):");
let resultado;
// Realizar la operación
if (operacion === "+") {
    resultado = num1 + num2;
} else if (operacion === "-") {
    resultado = num1 - num2;
} else if (operacion === "*") {
    resultado = num1 * num2;
} else if (operacion === "/") {
    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        console.log("No se puede dividir entre cero.");
        resultado = "Error";
    }
} else {
    console.log("Operación no válida.");
    resultado = "Error";
}

// Mostrar el resultado en la consola
console.log(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);



// Ejercicio 1 vectores


let vector = [12, 45, 67, 23, 89, 34, 56, 78, 90, 12];

    // Imprimir el vector con un ciclo for
    console.log("Impresión del vector con ciclo for:");
    for (let i = 0; i < vector.length; i++) {
        console.log("Posición " + i + ": " + vector[i]);
    }


    function convertirPolarACartesiana(r, angulo) {
        // Convertir el ángulo a radianes
        let anguloRadianes = angulo * (Math.PI / 180);
        
        // Calcular las coordenadas cartesianas
        let x = r * Math.cos(anguloRadianes);
        let y = r * Math.sin(anguloRadianes);
        
        return { x: x, y: y };
    }
    
    // Ejemplo de uso:
    let r = 5; // Módulo
    let angulo = 30; // Ángulo en grados
    
    let vector1 = convertirPolarACartesiana(r, angulo);
    console.log(`El vector en coordenadas cartesianas es: x = ${vector.x}, y = ${vector.y}`);
    