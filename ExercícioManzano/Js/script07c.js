// Exercício 7 - c) Calcular o volume de uma lata de óleo (páginas 25 e 26)
function calcularVolumeLata() {
    let raio = parseFloat(prompt("Insira o raio da lata de óleo:"));
    let altura = parseFloat(prompt("Insira a altura da lata de óleo:"));
    let volume = Math.PI * Math.pow(raio, 2) * altura;
    alert("O volume da lata de óleo é: " + volume);
}

calcularVolumeLata();
