// a) Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor. (páginas 41 e 42)
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let diferenca = num1 > num2 ? num1 - num2 : num2 - num1;
alert("A diferença do maior pelo menor valor é: " + diferenca);
