import { calcularMedia, calcularMediana, filtrarAtipicos } from "./math-utils";

// Ejemplo de uso
const numeros = [10, 12, 11, 9, 13, 80];

console.log("Media:", calcularMedia(numeros));
console.log("Mediana:", calcularMediana(numeros));
console.log("Números sin atípicos:", filtrarAtipicos(numeros, 20));