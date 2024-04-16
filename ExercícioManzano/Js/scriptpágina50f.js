// f) Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o total do somatório, a média aritmética e o total de valores lidos. (Página 50)
let soma = 0;
let contador = 0;
let num = parseInt(prompt("Digite um número:"));
while (num >= 0) {
    soma += num;
    contador++;
    num = parseInt(prompt("Digite outro número:"));
}
let media = soma / contador;
alert("O total do somatório é: " + soma);
alert("A média aritmética é: " + media);
alert("O total de valores lidos é: " + contador);