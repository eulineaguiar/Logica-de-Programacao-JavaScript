// 41) Algoritmo para calcular a média de aproveitamento e atribuir um conceito ao aluno
function calcularMediaAproveitamento() {
    let n1 = parseFloat(prompt("Digite a primeira nota:"));
    let n2 = parseFloat(prompt("Digite a segunda nota:"));
    let n3 = parseFloat(prompt("Digite a terceira nota:"));
    let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:"));

    let mediaAproveitamento = (n1 + n2 * 2 + n3 * 3 + mediaExercicios) / 7;
    let conceito;

    if (mediaAproveitamento >= 9) {
        conceito = 'A';
    } else if (mediaAproveitamento >= 7.5) {
        conceito = 'B';
    } else if (mediaAproveitamento >= 6) {
        conceito = 'C';
    } else {
        conceito = 'D';
    }

    alert("O conceito do aluno é: " + conceito);
}

calcularMediaAproveitamento();