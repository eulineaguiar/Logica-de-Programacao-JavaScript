// b) Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um valor positivo. (páginas 41 e 42)
let num = parseInt(prompt("Digite um número:"));
let modulo = num < 0 ? num * -1 : num;
alert("O módulo do número é: " + modulo);
