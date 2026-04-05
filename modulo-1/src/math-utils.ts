// Exportamos la función para poder importarla desde index.ts
export function calcularMedia(array: number[]): number | null {
  if (array.length === 0) {
    return null;
  }
  const suma = array.reduce((acumulador, elemento) => acumulador + elemento, 0);
  return suma / array.length;
}

export function calcularMediana(array: number[]): number | null {
  if (array.length === 0) {
    return null;
  }
  const arrayOrdenado = array.slice().sort((a, b) => a - b);

  const mitad = Math.floor(arrayOrdenado.length / 2);

  if (arrayOrdenado.length % 2 === 0) {
    return (arrayOrdenado[mitad - 1] + arrayOrdenado[mitad]) / 2;
  } else {
    return arrayOrdenado[mitad];
  }
}

export function filtrarAtipicos(array: number[], limite: number): number[] {
  const media = calcularMedia(array);
  if (media === null) {
    return [];
  }
  return array.filter((elemento) => Math.abs(elemento - media) <= limite);
}
