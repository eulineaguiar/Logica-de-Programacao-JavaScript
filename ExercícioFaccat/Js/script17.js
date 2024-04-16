// 17) Calcular a média aritmética simples e verificar se o aluno foi aprovado
let nota1 = prompt("Digite a primeira nota:");
let nota2 = prompt("Digite a segunda nota:");
let media = (parseFloat(nota1) + parseFloat(nota2)) / 2;
let mediaComVirgula = media.toFixed(1).replace('.', ',');
alert("A média calculada é: " + mediaComVirgula);
if (media >= 6) {
    alert("O aluno foi aprovado.");
} else {
    alert("O aluno não foi aprovado.");
}