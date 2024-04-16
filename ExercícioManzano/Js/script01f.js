// f) Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer. (páginas 46 e 47)
let base = parseFloat(prompt("Digite o valor da base:"));
let expoente = parseInt(prompt("Digite o valor do expoente:"));
let resultado = 1;
let i = 0;
while (i < expoente) {
    resultado *= base;
    i++;
}
alert(base + " elevado a " + expoente + " = " + resultado);
