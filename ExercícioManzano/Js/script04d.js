// d) Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. (páginas 41 e 42)
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));
let nota4 = parseFloat(prompt("Digite a quarta nota:"));
let media = (nota1 + nota2 + nota3 + nota4) / 4;
if (media >= 7) {
    alert("O aluno foi aprovado com média: " + media);
} else {
    let notaExame = parseFloat(prompt("Digite a nota do exame:"));
    let novaMedia = (media + notaExame) / 2;
    if (novaMedia >= 5) {
        alert("O aluno foi aprovado em exame com média: " + novaMedia);
    } else {
       alert("O aluno não foi aprovado. Média: " + novaMedia);
    }
}