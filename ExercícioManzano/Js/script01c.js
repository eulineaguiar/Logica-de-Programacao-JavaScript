// c) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500. (páginas 46 e 47)
let soma = 0;
let i = 1;
while (i <= 500) {
    if (i % 2 === 0) {
        soma += i;
    }
    i++;
}
alert("O somatório dos valores pares de 1 a 500 é: " + soma);