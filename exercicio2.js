/* 
   Esse código irá criar uma matriz 3x3 inicialmente preenchida com zeros 
   percorrer cada elemento da matriz e atribuir a soma dos valores das 
   posições( linha e coluna ), e finalmente imprimir a matriz no console. 
*/

// Define a matriz como um array de arrays
let matriz = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

console.log("Matriz Iniciada: ");
console.log(matriz);

// Percorre cada elemento da matriz
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    // Atribui a soma dos índices da linha e coluna à posição correspondente
    matriz[i][j] = i + j;
  }
}

console.log("Matriz Resultante: ");

// Imprime a matriz
for (let linha of matriz) {
  console.log(linha);
}