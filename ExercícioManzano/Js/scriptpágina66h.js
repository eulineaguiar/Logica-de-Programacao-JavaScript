// h) Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer. (Página 66)
let base = parseFloat(prompt("Digite o valor da base:"));
let expoente = parseInt(prompt("Digite o valor do expoente:"));
let resultado = 1;
for (let i = 0; i < expoente; i++) {
    resultado *= base;
}
alert(base + " elevado a " + expoente + " = " + resultado);