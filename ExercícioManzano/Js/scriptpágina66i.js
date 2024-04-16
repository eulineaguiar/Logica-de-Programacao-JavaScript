// i) Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. (Página 66)
let termo1 = 1;
let termo2 = 1;
alert(termo1);
alert(termo2);
for (let i = 3; i <= 15; i++) {
    let proximoTermo = termo1 + termo2;
    alert(proximoTermo);
    termo1 = termo2;
    termo2 = proximoTermo;
}