// Exercício 7 - a) Converter temperatura de Celsius para Fahrenheit (páginas 25 e 26)
function converterCelsiusParaFahrenheit() {
    let celsius = parseFloat(prompt("Insira a temperatura em graus Celsius:"));
    let fahrenheit = (9 * celsius + 160) / 5;
    alert("A temperatura em Fahrenheit é: " + fahrenheit);
}

converterCelsiusParaFahrenheit();