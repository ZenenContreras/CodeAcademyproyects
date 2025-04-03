/**
 * Función que encuentra el elemento mayoritario en un arreglo
 * El elemento mayoritario es aquel que aparece más de n/2 veces
 * donde n es el tamaño del arreglo
 * @param {number[]} nums - Arreglo de números
 * @return {number|null} - El elemento mayoritario o null si no existe
 */
function majorityElement(nums) {
    // Caso base: si el arreglo está vacío, no hay elemento mayoritario
    if (nums.length === 0) {
        return null;
    }
    
    // FASE 1: Encontrar un candidato potencial
    // Utilizamos el algoritmo de Boyer-Moore
    let candidato = null;
    let contador = 0;
    
    // Iteramos sobre cada número en el arreglo
    for (const num of nums) {
        // Si el contador llega a 0, elegimos un nuevo candidato
        if (contador === 0) {
            candidato = num;
            contador = 1;
        } 
        // Si encontramos el mismo número, incrementamos el contador
        else if (num === candidato) {
            contador++;
        } 
        // Si encontramos un número diferente, decrementamos el contador
        else {
            contador--;
        }
    }
    
    // FASE 2: Verificar si el candidato es realmente el elemento mayoritario
    // Contamos cuántas veces aparece el candidato en el arreglo
    contador = nums.filter(num => num === candidato).length;
    
    // Si el candidato aparece más de la mitad de las veces, es el elemento mayoritario
    if (contador > nums.length / 2) {
        return candidato;
    } else {
        return null;
    }
}

// Ejemplo de uso
console.log(majorityElement([2,2,2,2,2,2,2])) // Debería imprimir 2

