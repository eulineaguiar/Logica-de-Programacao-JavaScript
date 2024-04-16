// 49) Acrescentando uma mensagem 'NOVO CÁLCULO (S/N)?' ao final do exercício 48
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function calcularMediaNovoCalculo() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let media = calcularMedia(nota1, nota2);
    alert("A média das notas é: " + media);

    let resposta = prompt('NOVO CÁLCULO (S/N)?');
    while (resposta.toUpperCase() === 'S') {
        nota1 = parseFloat(prompt('Informe um novo valor para a primeira nota: '));
        nota2 = parseFloat(prompt('Informe um novo valor para a segunda nota: '));
        media = calcularMedia(nota1, nota2);
        alert("A média das notas é: " + media);
        resposta = prompt('NOVO CÁLCULO (S/N)?');
    }
}

calcularMediaNovoCalculo();