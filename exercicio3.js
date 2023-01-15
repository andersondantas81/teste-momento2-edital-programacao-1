/* 
   Escreva um programa que lê 2 matrizes A e B, cada uma com 3 linhas e 2 
   colunas. Construir uma matriz C de mesma dimensão (3x2) onde C é formada 
   pela soma dos elementos da matriz A com os elementos da matriz B 
   (exemplo: C[1][1] = A[1][1] + B[1][1]). Apresentar ao final as 3 matrizes (A, B e C).

   Este programa primeiro lê as matrizes A e B digitadas pelo usuário e 
   armazena-as em duas matrizes. Em seguida, ele cria a matriz C como a soma 
   dos elementos de A e B, usando uma sintaxe de atribuição de matriz. 
   Finalmente, o programa apresenta as três matrizes usando a função "console.log".
*/
const prompt = require ("prompt-sync")({sigint: true});

// Lê as matrizes A e B
console.log("Insira os elementos da matriz A:");
let A = [[parseInt(prompt("Informe o primeiro elemento do vator A: ")), 
          parseInt(prompt("Informe o segundo elemento do vator A: "))], 
         [parseInt(prompt("Informe o tercero elemento do vator A: ")), 
          parseInt(prompt("Informe o quarto elemento do vator A: "))], 
         [parseInt(prompt("Informe o quinto elemento do vator A: ")), 
          parseInt(prompt("Informe o sexto elemento do vator A: "))]
        ];

console.log("Insira os elementos da matriz B:");
let B = [[parseInt(prompt("Informe o primeiro elemento do vator B: ")), 
          parseInt(prompt("Informe o segundo elemento do vator B: "))], 
         [parseInt(prompt("Informe o terceiro elemento do vator B: ")), 
         parseInt(prompt("Informe o quarto elemento do vator B: "))], 
         [parseInt(prompt("Informe o quinto elemento do vator B: ")), 
          parseInt(prompt("Informe o sexto elemento do vator B: "))]
        ];

// Cria a matriz C como a soma dos elementos de A e B
let C = [[A[0][0] + B[0][0], A[0][1] + B[0][1]], [A[1][0] + B[1][0], A[1][1] + B[1][1]], [A[2][0] + B[2][0], A[2][1] + B[2][1]]];

// Apresenta as matrizes A, B e C
console.log("Matriz A:");
console.log(A);

console.log("Matriz B:");
console.log(B);

console.log("Matriz C:");
console.log(C);