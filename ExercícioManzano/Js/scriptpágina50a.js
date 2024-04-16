// a) Apresentar os quadrados dos números inteiros de 15 a 200. (Página 50)
let num = 15;
do {
    alert("O quadrado de " + num + " é: " + Math.pow(num, 2));
    num++;
} while (num <= 200);
