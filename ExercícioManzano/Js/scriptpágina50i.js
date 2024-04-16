// i) Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. (Página 50)
let num = parseInt(prompt("Digite um número:"));
let maior = num;
let menor = num;
while (num >= 0) {
    if (num > maior) {
        maior = num;
    }
    if (num < menor) {
        menor = num;
    }
    num = parseInt(prompt("Digite outro número:"));
}
alert("O maior número é: " + maior);
alert("O menor número é: " + menor);