// 29) Ler 3 valores e escrever a soma dos 2 maiores
let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));
let valor3 = parseFloat(prompt("Digite o terceiro valor:"));

let valores = [valor1, valor2, valor3];
valores.sort((a, b) => b - a); // Ordena os valores em ordem decrescente

let somaDoisMaiores = valores[0] + valores[1];
alert("A soma dos dois maiores valores é: " + somaDoisMaiores);