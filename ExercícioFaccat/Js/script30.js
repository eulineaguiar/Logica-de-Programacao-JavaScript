// 30) Ler 3 valores e escrevê-los em ordem crescente
let valor1 = prompt("Digite o primeiro valor:");
let valor2 = prompt("Digite o segundo valor:");
let valor3 = prompt("Digite o terceiro valor:");
let valores = [valor1, valor2, valor3];
valores.sort((a, b) => a - b); // Ordena os valores em ordem crescente
alert("Os valores em ordem crescente são: " + valores.join(", "));