// h) Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores. (páginas 41 e 42)
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let num3 = parseInt(prompt("Digite o terceiro número:"));
let num4 = parseInt(prompt("Digite o quarto número:"));
let num5 = parseInt(prompt("Digite o quinto número:"));
let numeros = [num1, num2, num3, num4, num5];
let maior = Math.max(...numeros);
let menor = Math.min(...numeros);
alert("O maior número é: " + maior);
alert("O menor número é: " + menor);