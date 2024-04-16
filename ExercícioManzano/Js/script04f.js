// f) Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente. (páginas 41 e 42)
let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));
let C = parseFloat(prompt("Digite o valor de C:"));
let numeros = [A, B, C];
numeros.sort((a, b) => a - b);
alert("Os números em ordem crescente são: " + numeros.join(", "));
