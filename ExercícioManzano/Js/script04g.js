// g) Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3. (páginas 41 e 42)
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let num3 = parseInt(prompt("Digite o terceiro número:"));
let num4 = parseInt(prompt("Digite o quarto número:"));
let numeros = [num1, num2, num3, num4];
let divisivel = numeros.filter(num => num % 2 === 0 && num % 3 === 0);
alert("Os números divisíveis por 2 e 3 são: " + divisivel.join(", "));