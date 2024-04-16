// i) Elaborar um programa que efetue a leitura de um número inteiro e apresentar uma mensagem informando se o número é par ou ímpar. (páginas 41 e 42)
let num = parseInt(prompt("Digite um número:"));
if (num % 2 === 0) {
    alert("O número é par.");
} else {
    alert("O número é ímpar.");
}