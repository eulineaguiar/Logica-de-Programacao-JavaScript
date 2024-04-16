// g) Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. (páginas 46 e 47)
let termo1 = 1;
let termo2 = 1;
alert(termo1);
alert(termo2);
let i = 3;
while (i <= 15) {
    let proximoTermo = termo1 + termo2;
   alert(proximoTermo);
    termo1 = termo2;
    termo2 = proximoTermo;
    i++;
}
