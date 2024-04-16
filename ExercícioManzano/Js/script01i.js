// i) Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do somatório e a média aritmética dos valores lidos. (páginas 46 e 47)
let soma = 0;
let i = 0;
while (i < 10) {
    let num = parseFloat(prompt("Digite um número:"));
    soma += num;
    i++;
}
let media = soma / 10;
alert("O total do somatório é: " + soma);
alert("A média aritmética é: " + media);