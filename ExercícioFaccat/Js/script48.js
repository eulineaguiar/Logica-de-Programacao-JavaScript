// 48) Algoritmo para ler as notas da 1a. e 2a. avaliações de um aluno e calcular a média
function calcularMedia() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));

    while (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert('VALOR INVÁLIDO. As notas devem estar entre 0 e 10.');
        nota1 = parseFloat(prompt('Informe um novo valor para a primeira nota: '));
        nota2 = parseFloat(prompt('Informe um novo valor para a segunda nota: '));
    }

    let media = (nota1 + nota2) / 2;
    alert("A média das notas é: " + media);
}

calcularMedia();