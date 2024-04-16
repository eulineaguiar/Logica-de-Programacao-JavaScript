// a) Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. (páginas 46 e 47)
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num = parseInt(prompt("Digite um número:"));
let i = 1;
while (i <= 10) {
    alert(num + " x " + i + " = " + num * i);
    i++;
}