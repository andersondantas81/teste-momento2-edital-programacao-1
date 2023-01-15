/*
   Este código lê 6 valores do usuário, encontra o maior e o menor valor do 
   vetor e suas respectivas posições, ordena o vetor em ordem crescente 
   utilizando o algoritmo de ordenação bubble sort e imprime.
*/

const prompt = require ("prompt-sync")({sigint: true});
// lê os valores do usuário e armazena no vetor
const vetor = [];
for (let i = 0; i < 6; i++) {
  const valor = prompt("Digite um valor: ");
  vetor.push(valor);
}

// encontra o maior e o menor valor do vetor
let maior = vetor[0];
let menor = vetor[0];
let maiorPos = 0;
let menorPos = 0;

for (let i = 1; i < vetor.length; i++) {
  if (vetor[i] > maior) {
    maior = vetor[i];
    maiorPos = i;
  } else if (vetor[i] < menor) {
    menor = vetor[i];
    menorPos = i;
  }
}

// imprime o maior e o menor valor e suas respectivas posições
console.log(`Maior valor: ${maior} na posição ${maiorPos}`);
console.log(`Menor valor: ${menor} na posição ${menorPos}`);

// ordena o vetor em ordem crescente usando o algoritmo bubble sort
for (let i = 0; i < vetor.length - 1; i++) {
  for (let j = 0; j < vetor.length - i - 1; j++) {
    if (vetor[j] > vetor[j + 1]) {
      // troca os elementos de lugar
      const temp = vetor[j];
      vetor[j] = vetor[j + 1];
      vetor[j + 1] = temp;
    }
  }
}

// imprime os elementos do vetor em ordem crescente
console.log(`Vetor em ordem crescente: ${vetor}`);