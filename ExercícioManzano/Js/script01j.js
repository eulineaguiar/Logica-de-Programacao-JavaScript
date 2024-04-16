// j) Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores pares situados na faixa numérica de 50 a 70. (páginas 46 e 47)
let soma = 0;
let contador = 0;
let i = 50;
while (i <= 70) {
    if (i % 2 === 0) {
        soma += i;
        contador++;
    }
    i++;
}
let media = soma / contador;
alert("A soma dos valores pares de 50 a 70 é: " + soma);
alert("A média aritmética é: " + media);