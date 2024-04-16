// h) Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. (páginas 46 e 47)
let celsius = 10;
while (celsius <= 100) {
    let fahrenheit = 9 * celsius / 5 + 32;
    alert(celsius + " graus Celsius = " + fahrenheit + " graus Fahrenheit");
    celsius += 10;
}